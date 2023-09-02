function Ssr({ now }) {
	return (
		<>
			<main>
				<p>SSR방식 테스트</p>
				<h2>{now}</h2>
			</main>
		</>
	);
}

// 서버단에서 실행 새로고침시 계속 바뀜
export async function getServerSideProps() {
	console.log('ssr');
	return {
		props: { now: performance.now() },
	};
}

export default Ssr;
