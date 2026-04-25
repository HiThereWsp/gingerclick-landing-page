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

  return res.status(200).json({ ok: true });
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
