// Vercel Serverless Function · Antilla mai 2026
// Reçoit les soumissions du formulaire de la landing /antilla.html
// 1. Ajoute le contact à Brevo (liste id 14 "Antilla leads mai 2026")
// 2. Envoie une notification email à Andy + Philippe (si flag activé)
//
// Variables d'environnement requises (Vercel) :
//   BREVO_API_KEY              · clé API Brevo (xkeysib-...)
//   BREVO_ANTILLA_LIST_ID      · 14 (par défaut)
//   BREVO_SEND_TO_PHILIPPE     · "true" ou "false" (false par défaut, à activer après tests)
//   PHILIPPE_EMAIL             · email de Philippe Pied (Antilla)
//   ANDY_EMAIL                 · andy@gingerclick.com

export default async function handler(req, res) {
  // CORS pour usage cross-origin (Antilla peut iframe la landing)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const BREVO_API_KEY = process.env.BREVO_API_KEY;
  const BREVO_LIST_ID = parseInt(process.env.BREVO_ANTILLA_LIST_ID || '14', 10);
  const SEND_TO_PHILIPPE = process.env.BREVO_SEND_TO_PHILIPPE === 'true';
  const ANDY_EMAIL = process.env.ANDY_EMAIL || 'andy@gingerclick.com';
  const PHILIPPE_EMAIL = process.env.PHILIPPE_EMAIL || '';

  if (!BREVO_API_KEY) {
    console.error('Missing BREVO_API_KEY');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  let payload;
  try {
    payload = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch (e) {
    return res.status(400).json({ error: 'Invalid JSON' });
  }

  const {
    source = 'unknown',
    full_name = '',
    email = '',
    consent = false,
    utm_source = '',
    utm_medium = '',
    utm_campaign = '',
    utm_content = '',
  } = payload || {};

  // Validation basique
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Email invalide' });
  }
  if (!consent) {
    return res.status(400).json({ error: 'Consentement requis' });
  }

  // Split nom complet en first/last (Brevo accepte les deux)
  const [first, ...rest] = full_name.trim().split(/\s+/);
  const last = rest.join(' ') || '';

  // 1. Créer / mettre à jour le contact dans Brevo
  try {
    const brevoRes = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email,
        attributes: {
          PRENOM: first,
          NOM: last,
          SOURCE: source,
          UTM_SOURCE: utm_source,
          UTM_MEDIUM: utm_medium,
          UTM_CAMPAIGN: utm_campaign,
          UTM_CONTENT: utm_content,
        },
        listIds: [BREVO_LIST_ID],
        updateEnabled: true,
      }),
    });

    if (!brevoRes.ok && brevoRes.status !== 204) {
      const text = await brevoRes.text();
      console.error('Brevo error:', brevoRes.status, text);
      return res.status(502).json({ error: 'Erreur lors de l\'enregistrement' });
    }
  } catch (err) {
    console.error('Brevo fetch error:', err);
    return res.status(502).json({ error: 'Erreur de connexion' });
  }

  // 2. Envoyer une notification email (Andy + Philippe si flag actif)
  const recipients = [{ email: ANDY_EMAIL, name: 'Andy Guitteaud' }];
  if (SEND_TO_PHILIPPE && PHILIPPE_EMAIL) {
    recipients.push({ email: PHILIPPE_EMAIL, name: 'Philippe Pied' });
  }

  const sourceLabel = {
    workshops: 'Liste d\'attente Workshops',
    newsletter: 'Newsletter Décryptage IA',
    appel: 'Appel personnalisé (Cal.com)',
  }[source] || source;

  const htmlBody = `
    <h2 style="font-family:Georgia,serif;color:#1A4D2E;">Nouveau lead Antilla mai 2026</h2>
    <p style="font-family:Arial,sans-serif;color:#1a1a1a;line-height:1.6;">
      <strong>Source :</strong> ${sourceLabel}<br>
      <strong>Nom :</strong> ${escapeHtml(full_name) || '(non renseigné)'}<br>
      <strong>Email :</strong> <a href="mailto:${email}">${email}</a><br>
      <strong>UTM source :</strong> ${escapeHtml(utm_source) || '—'}<br>
      <strong>UTM content :</strong> ${escapeHtml(utm_content) || '—'}<br>
      <strong>Date :</strong> ${new Date().toISOString()}
    </p>
    <p style="font-family:Arial,sans-serif;color:#6b6355;font-size:12px;">
      Contact ajouté à la liste Brevo « Antilla leads mai 2026 » (id ${BREVO_LIST_ID}).
    </p>
  `;

  try {
    await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: { email: 'no-reply@gingerclick.com', name: 'GingerClick × Antilla' },
        to: recipients,
        subject: `[Antilla] Nouveau lead · ${sourceLabel} · ${full_name || email}`,
        htmlContent: htmlBody,
      }),
    });
  } catch (err) {
    // Ne bloque pas la réponse au client si la notif échoue
    console.error('Notification email failed:', err);
  }

  // 3. Welcome email envoyé au lead (selon la source)
  try {
    const leadFirstName = first || 'bonjour';
    const welcomeContent = buildWelcomeEmail(source, leadFirstName);
    if (welcomeContent) {
      await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': BREVO_API_KEY,
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          sender: { email: 'andy@gingerclick.com', name: 'Andy Guitteaud' },
          replyTo: { email: 'andy@gingerclick.com', name: 'Andy Guitteaud' },
          to: [{ email, name: full_name || email }],
          subject: welcomeContent.subject,
          htmlContent: welcomeContent.html,
        }),
      });
    }
  } catch (err) {
    // Ne bloque pas non plus la réponse au client si le welcome échoue
    console.error('Welcome email failed:', err);
  }

  return res.status(200).json({ ok: true });
}

// Welcome email selon la source de l'inscription
function buildWelcomeEmail(source, firstName) {
  const safeName = escapeHtml(firstName);

  if (source === 'workshops') {
    return {
      subject: 'Bienvenue. On vous tient au courant du prochain workshop IA',
      html: `
<div style="font-family:'Source Serif Pro',Georgia,serif;color:#1a1a1a;max-width:560px;margin:0 auto;padding:24px;line-height:1.55;">
  <p style="font-size:16px;">Bonjour ${safeName},</p>

  <p style="font-size:16px;">Merci de votre inscription à la liste d'attente.</p>

  <p style="font-size:16px;">Nous organisons régulièrement des ateliers IA gratuits, en présentiel à Fort-de-France et à distance, pour aider les dirigeants à <strong>clarifier les usages de l'IA</strong> et à <strong>s'inscrire dans un processus de transition digitale concret</strong>. Cas d'usage réels, pas de buzz, des décisions à prendre lundi matin.</p>

  <p style="font-size:16px;">Vous recevrez un email dès qu'on annonce le prochain atelier.</p>

  <p style="font-size:16px;">En attendant, si vous voulez avoir un aperçu de ce qu'on construit chez GingerClick : <a href="https://gingerclick.com" style="color:#1A4D2E;">gingerclick.com</a></p>

  <p style="font-size:16px;">À très vite,<br><em style="color:#1A4D2E;font-weight:600;">Andy Guitteaud</em></p>

  <hr style="border:none;border-top:1px solid #e0dccc;margin:24px 0;">

  <p style="font-size:11px;color:#6b6355;letter-spacing:0.04em;">
    GingerClick · Automatisation · IA · Marketing · Formation<br>
    <a href="https://gingerclick.com" style="color:#C9A84C;text-decoration:none;">gingerclick.com</a>
  </p>
</div>`,
    };
  }

  if (source === 'newsletter') {
    return {
      subject: 'Bienvenue dans le décryptage IA des dirigeants',
      html: `
<div style="font-family:'Source Serif Pro',Georgia,serif;color:#1a1a1a;max-width:560px;margin:0 auto;padding:24px;line-height:1.55;">
  <p style="font-size:16px;">Bonjour ${safeName},</p>

  <p style="font-size:16px;">Merci pour votre inscription au décryptage IA des dirigeants.</p>

  <p style="font-size:16px;">Un mail par semaine, cinq minutes de lecture : les sorties qui comptent, les signaux faibles, les leviers concrets. <strong>Zéro hype, des décisions à prendre.</strong></p>

  <p style="font-size:16px;">Le prochain numéro arrive sous peu. D'ici là, vous pouvez répondre directement à ce mail si une question sur l'IA croise vos chantiers — j'y réponds personnellement.</p>

  <p style="font-size:16px;">À très vite,<br><em style="color:#1A4D2E;font-weight:600;">Andy Guitteaud</em></p>

  <hr style="border:none;border-top:1px solid #e0dccc;margin:24px 0;">

  <p style="font-size:11px;color:#6b6355;letter-spacing:0.04em;">
    GingerClick · Automatisation · IA · Marketing · Formation<br>
    <a href="https://gingerclick.com" style="color:#C9A84C;text-decoration:none;">gingerclick.com</a>
  </p>
</div>`,
    };
  }

  // Pas de welcome pour autres sources (ex: test, appel...)
  return null;
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
