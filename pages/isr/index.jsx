function Isr({ now }) {
	return (
		<>
			<main>
				<p>ISR방식 테스트</p>
				<h2>{now}</h2>
			</main>
		</>
	);
}

// ssg 방식에서 revalidate props 추가
// 설정시간에 따라 갱신 (일정 주기로 바뀔때)
export async function getStaticProps() {
	console.log('isr');
	return {
		props: { now: performance.now() },
		revalidate: 5,
	};
}

export default Isr;
