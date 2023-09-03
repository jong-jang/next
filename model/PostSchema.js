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
const Post = mongoose.model('Post', postSchema);
export { Post };
