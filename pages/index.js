import Image from 'next/image';
import styles from './Home.module.scss';
import pic1 from '@/public/img/pic1.jpg';
import pic2 from '@/public/img/pic2.jpg';
import pic3 from '@/public/img/pic3.jpg';

export default function Home() {
	return (
		<>
			<main className={styles.main}>
				<div>
					<Image src={pic1} alt='pic' quality={10} fill priority />
				</div>
				<div>
					{/* 기본적으로 이미지 컴포넌트를 lazy-loading적용 priority로 이미지 로딩 우선순위를 지정하면 자동으로 lazy_loading해제 보통 화면이 렌더링되면 보이는 첫번째 이미지에 지정*/}
					<Image src={pic2} alt='pic' quality={10} fill />
				</div>
				<div>
					<Image src={pic3} alt='pic' quality={10} fill />
				</div>
			</main>
		</>
	);
}
