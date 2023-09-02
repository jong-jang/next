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
