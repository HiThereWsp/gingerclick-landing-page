// Vercel Serverless · Réception des leads landing Antilla
// Crée/maj contact Brevo + envoi email transactionnel Andy (+ Philippe si flag ON)

const BREVO_BASE = 'https://api.brevo.com/v3';
const ANDY_EMAIL = 'andy@gingerclick.com';
const PHILIPPE_EMAIL = 'philippe@antilla.fr';
const SENDER = { name: 'GingerClick', email: 'andy@gingerclick.com' };

export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Méthode non autorisée' });

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) return res.status(500).json({ ok: false, error: 'Configuration serveur manquante' });

  const listId = parseInt(process.env.BREVO_ANTILLA_LIST_ID || '0', 10);
  const sendToPhilippe = (process.env.BREVO_SEND_TO_PHILIPPE || 'false').toLowerCase() === 'true';

  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  const { prenom, nom, email, telephone, utm_source, utm_medium, utm_campaign, utm_content } = body || {};

  if (!email || !prenom || !nom) {
    return res.status(400).json({ ok: false, error: 'Prénom, nom et email sont requis' });
  }

  // ---- 1. Contact Brevo (create or update)
  const contactBody = {
    email,
    attributes: {
      PRENOM: prenom,
      NOM: nom,
      SMS: telephone || '',
      UTM_SOURCE: utm_source || '',
      UTM_MEDIUM: utm_medium || '',
      UTM_CAMPAIGN: utm_campaign || '',
      UTM_CONTENT: utm_content || ''
    },
    updateEnabled: true
  };
  if (listId > 0) contactBody.listIds = [listId];

  try {
    const cres = await fetch(`${BREVO_BASE}/contacts`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json'
      },
      body: JSON.stringify(contactBody)
    });
    if (!cres.ok && cres.status !== 400) {
      const txt = await cres.text();
      console.error('Brevo contact error', cres.status, txt);
    }
  } catch (e) {
    console.error('Brevo contact exception', e);
    return res.status(502).json({ ok: false, error: 'Erreur de communication avec Brevo' });
  }

  // ---- 2. Notification email Andy (+ Philippe si flag ON)
  const recipients = [{ email: ANDY_EMAIL, name: 'Andy Guitteaud' }];
  if (sendToPhilippe) recipients.push({ email: PHILIPPE_EMAIL, name: 'Philippe Pied' });

  const notifHtml = `
    <div style="font-family: Georgia, serif; max-width: 540px; margin: 0 auto; padding: 24px;">
      <h2 style="font-family: 'Playfair Display', serif; color: #1A4D2E; margin: 0 0 16px;">Nouveau lead Antilla</h2>
      <p style="color: #1a1a1a; line-height: 1.6;">Un lecteur vient de s'abonner à la newsletter GingerClick depuis l'article Antilla.</p>
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px; font-family: monospace; font-size: 13px;">
        <tr><td style="padding: 6px 0; color: #6b6355;">Prénom</td><td style="padding: 6px 0; color: #1a1a1a; font-weight: 600;">${esc(prenom)}</td></tr>
        <tr><td style="padding: 6px 0; color: #6b6355;">Nom</td><td style="padding: 6px 0; color: #1a1a1a; font-weight: 600;">${esc(nom)}</td></tr>
        <tr><td style="padding: 6px 0; color: #6b6355;">Email</td><td style="padding: 6px 0;"><a href="mailto:${esc(email)}" style="color: #1A4D2E;">${esc(email)}</a></td></tr>
        <tr><td style="padding: 6px 0; color: #6b6355;">Téléphone</td><td style="padding: 6px 0; color: #1a1a1a;">${esc(telephone || '—')}</td></tr>
      </table>
      <hr style="border: none; border-top: 1px solid #d4cec0; margin: 20px 0;">
      <table style="width: 100%; border-collapse: collapse; font-family: monospace; font-size: 11px; color: #6b6355;">
        <tr><td>utm_source</td><td>${esc(utm_source || '—')}</td></tr>
        <tr><td>utm_medium</td><td>${esc(utm_medium || '—')}</td></tr>
        <tr><td>utm_campaign</td><td>${esc(utm_campaign || '—')}</td></tr>
        <tr><td>utm_content</td><td>${esc(utm_content || '—')}</td></tr>
      </table>
      <p style="color: #6b6355; font-size: 11px; margin-top: 24px;">GingerClick × Antilla · Notification automatique</p>
    </div>`;

  try {
    const ires = await fetch(`${BREVO_BASE}/smtp/email`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json'
      },
      body: JSON.stringify({ sender: SENDER, to: recipients, subject: `Nouveau lead Antilla · ${prenom} ${nom}`, htmlContent: notifHtml })
    });
    if (!ires.ok) {
      const t = await ires.text();
      console.error('Brevo email error', ires.status, t);
    }
  } catch (e) {
    console.error('Brevo email exception', e);
  }

  return res.status(200).json({ ok: true });
}

function esc(s) {
  return String(s || '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
