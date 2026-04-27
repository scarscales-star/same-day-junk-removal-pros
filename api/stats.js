// GET /api/stats  → { configured: true, stats: { step2, step3, submit, call, call_mobile, call_desktop } }
// Uses CountAPI (countapi.xyz) — no setup, no env vars required.
const KEYS = ['step2', 'step3', 'submit', 'call', 'call_mobile', 'call_desktop'];
const NS = 'sdjrpros';

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    const results = await Promise.all(
      KEYS.map(k =>
        fetch(`https://api.countapi.xyz/get/${NS}/${k}`)
          .then(r => r.json())
          .then(d => [k, typeof d.value === 'number' ? d.value : 0])
          .catch(() => [k, 0])
      )
    );
    return res.json({ configured: true, stats: Object.fromEntries(results) });
  } catch (e) {
    return res.json({ configured: false, stats: {}, error: e.message });
  }
};
