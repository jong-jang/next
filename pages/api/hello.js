// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
	if (req.method === 'GET') {
		res.json({ name: 'Andy Choi' });
	}
	if (req.method === 'POST') {
		res.json({ name: req.body + 1 });
	}
}
