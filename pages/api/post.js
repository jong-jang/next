import { connectMongoDB } from '@/lips/MongoConnect';

export default async function handler(req, res) {
	const DB = await connectMongoDB();
	console.log(DB);
}
