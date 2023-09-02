import { useRouter } from 'next/router';

function Detail() {
	const router = useRouter();
	console.log(router);
	return <main>{/* <p>{`${router}번째 상세페이지 입니다.`}</p> */}</main>;
}

export default Detail;
