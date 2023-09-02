function Ssg({ now }) {
	return (
		<>
			<main>
				<p>SSG방식 테스트</p>
				<h2>{now}</h2>
			</main>
		</>
	);
}

export async function getStaticProps() {
	console.log('ssg');
	return {
		props: { now: performance.now() },
	};
}

export default Ssg;

// 바뀔일이 거의 없는 파일 SSG 방식으로
// 빌드전엔 새로고침시 바뀌는데 빌드 후엔 static하게 바뀜
