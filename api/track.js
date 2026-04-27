// POST /api/track  { event: "step2"|"step3"|"submit"|"call"|"call_mobile"|"call_desktop" }
// Uses CountAPI (countapi.xyz) — no setup, no env vars required.
module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).end();

  const VALID = ['step2', 'step3', 'submit', 'call', 'call_mobile', 'call_desktop'];
  const event = req.body && req.body.event;
  if (!event || !VALID.includes(event)) return res.status(400).json({ error: 'Invalid event' });

  try {
    await fetch(`https://api.countapi.xyz/hit/sdjrpros/${event}`);
  } catch (_) { /* silent */ }

  return res.json({ ok: true });
};
