import { connectMongoDB } from '@/lips/MongoConnect';

export default async function handler(req, res) {
	try {
		const DB = await connectMongoDB();
		console.log(DB);
		res.status(200).send('success');
	} catch (err) {
		res.status(400).send({ err });
	}
}
