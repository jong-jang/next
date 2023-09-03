import mongoose from 'mongoose';

export const connectMongoDB = async () => {
	// 해당 함수 호출시 MongoDB 접속에 성공하면 접속 성공 객체를 promise형태로 반환
	if (mongoose.connection.readyState === 1) {
		return mongoose.connection.asPromise();
	}
	// 위에서 성공 promise가 반환되면
	// 동기적으로 mongoDB접속 후 해당 상태를 리턴
	// 해당 함수를 MongoDB 사용해야 되는 서버라우터에서 호출하면 MongoDB접속 가능
	return await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI);
};
