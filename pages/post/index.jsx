import { useEffect } from 'react';

function Post() {
	// api 라우팅 (서버요청처리를 위해서는 express같은 서버관련 프레임웍없이도 next자체적으로 서버요청에 대한 응답을 클라이언트로 전달 가능)
	// next에서는 api폴더 안쪽에 서버쪽 요청 및 응답에 대한 라우팅 설정가능
	// api폴더 안쪽에 파일명이 자동적으로 라우터요청명으로 설정됨 /api/hello
	useEffect(() => {
		fetch('/api/hello')
			.then((res) => res.json())
			.then((json) => console.log(json));
	}, []);

	return (
		<main>
			<p>게시글 목록 페이지</p>
		</main>
	);
}

export default Post;
