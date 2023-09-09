import mongoose from 'mongoose';

// mongoose에 Schema 생성자 함수로 글 저장객체에 적용될 강제 틀 적용 (스키마)
const postSchema = new mongoose.Schema(
	{
		title: String,
		content: String,
		postNum: Number,
	},
	{
		collection: 'Post',
	}
);

// 해당 스키마를 적용한 모델생성함수를 내보냄
//모델 인스턴스가 한번 컴파일되면 overWrite불가하다는 콘솔에러 해결방법
//오류원인 : 이미 한번 생성된 컬랙션임에도 불구하고 데이터변경 요청이 있을때마다 새로운 컬렉션 생성 시도 문제
//해결방법 : 해당컬렉션이 없을떄만 생성하고 있으면 이미 있는 기존의 컬렉션 데이터 호출
const Post = mongoose.models.Post || mongoose.model('Post', postSchema);
export { Post };
