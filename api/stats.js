// GET /api/stats  → { configured: bool, stats: { step2, step3, submit, call, call_mobile, call_desktop } }
module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    return res.json({ configured: false, stats: {} });
  }

  const keys = ['step2', 'step3', 'submit', 'call', 'call_mobile', 'call_desktop'];

  try {
    const results = await Promise.all(
      keys.map(k =>
        fetch(`${url}/get/sdjr_${k}`, {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then(r => r.json())
        .then(d => [k, parseInt(d.result) || 0])
        .catch(() => [k, 0])
      )
    );
    return res.json({ configured: true, stats: Object.fromEntries(results) });
  } catch (e) {
    return res.json({ configured: false, stats: {}, error: e.message });
  }
};
