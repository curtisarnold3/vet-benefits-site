/* OPTIONAL Vercel serverless function for the interest list.
   Only used when data/config.js has waitlistMode: "vercel". Does nothing on GitHub Pages.
   Set these environment variables in the Vercel project (Settings > Environment Variables):
     WAITLIST_FORWARD_URL   where to forward the submission (a Formspree endpoint, a Google Apps Script
                            web app URL, a Zapier/Make webhook, or your own API). Required.
     WAITLIST_SECRET        optional bearer token sent as Authorization to that URL.
   The function validates, strips anything that looks like an SSN, drops honeypot hits, and forwards. */
module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });
  let b = req.body || {};
  if (typeof b === 'string') { try { b = JSON.parse(b); } catch { b = {}; } }
  if (b._gotcha) return res.status(200).json({ ok: true }); // honeypot: pretend success
  const first = String(b.first_name || '').trim().slice(0, 60);
  const email = String(b.email || '').trim().slice(0, 120);
  if (!first) return res.status(400).json({ errors: [{ message: 'First name is required' }] });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return res.status(400).json({ errors: [{ message: 'Valid email is required' }] });
  if (b.consent !== 'yes') return res.status(400).json({ errors: [{ message: 'Consent is required' }] });
  if (b.interest_software !== 'yes' && b.interest_handling !== 'yes') return res.status(400).json({ errors: [{ message: 'Pick at least one offering' }] });
  if (/\b\d{3}-?\d{2}-?\d{4}\b/.test(first + ' ' + email)) return res.status(400).json({ errors: [{ message: 'Do not enter SSN-like numbers' }] });
  const payload = {
    first_name: first, email,
    interest_software: b.interest_software === 'yes', interest_handling: b.interest_handling === 'yes',
    goal: String(b.goal || '').slice(0, 20), state: String(b.state || '').slice(0, 2).toUpperCase(),
    consent: true, source_page: String(b.source_page || '').slice(0, 200), submitted_at: new Date().toISOString()
  };
  const url = process.env.WAITLIST_FORWARD_URL;
  if (!url) return res.status(500).json({ errors: [{ message: 'WAITLIST_FORWARD_URL is not configured' }] });
  try {
    const headers = { 'Content-Type': 'application/json', Accept: 'application/json' };
    if (process.env.WAITLIST_SECRET) headers.Authorization = 'Bearer ' + process.env.WAITLIST_SECRET;
    const r = await fetch(url, { method: 'POST', headers, body: JSON.stringify(payload) });
    if (!r.ok) throw new Error('Upstream ' + r.status);
    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(502).json({ errors: [{ message: 'Could not save right now: ' + e.message }] });
  }
};
