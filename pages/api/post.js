import { connectMongoDB } from '@/lips/MongoConnect';
import { Post } from '@/model/PostSchema';
import { Counter } from '@/model/CounterSchema';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		//클라이언트로부터 전달받은 데이터 정보 임시로 변수에 담음
		const temp = req.body; //{title, content}
		try {
			await connectMongoDB();

			Counter.findOne({ name: 'counter' })
				.exec()
				.then((doc) => {
					//클라이언트로 가져온 객체에 Counter모델 정보 추가
					temp.postNum = doc.postNum; // {title, contnet, postNum}

					//카운터값이 추가된 모델 객체를 저장
					const postModel = new Post(temp);

					//Post모델 저장이 성공하면 다시 기존 Counter모델 값을 1증가
					postModel.save().then(() => {
						Counter.updateOne({ name: 'counter' }, { $inc: { postNum: 1 } })
							.exec()
							.then(() => {
								//Counter모델 값 변경이 성공하면 클라이언트에 성공 응답객체 전달
								res.json({ success: true });
							})
							.catch((err) => res.json({ success: false, err: err }));
					});
				});
		} catch (err) {
			res.send({ err });
		}
	}
}

// DB에 데이터 저장 작업 순서
// 1. 저장할 데이터의 구조에 맞게 스키마 생성 (스키마: DB에 저장되는 객체의 구조를 강제하는 시스템적인 틀)
// 2. api라우터에서 스카마가 적용된 모델 객체에 클라이언트로부터 전달된 데이터를 바인딩 후 DB에 저장한뒤, 응답성공유무를 다시 클라이언트에게 전달
// 2-1: 클라이언트에서 포스트요청 받음
// 2-2: 카운터모델에서 해당 데이터의 고유 번호를 가져온뒤 클라이언트로부터 전달된 데이터와 결합 (해당 데이터의 고유값을 임의로 생성하기 위함)
// 2-3: 결합된 객체를 Post모델로 저장
// 2-4: DB에 저장이 완료되면 다시 카운터 모델값 증가
