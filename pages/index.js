import Image from 'next/image';
import styles from './Home.module.scss';
import pic1 from '@/public/img/pic1.jpg';
import pic2 from '@/public/img/pic2.jpg';
import pic3 from '@/public/img/pic3.jpg';
import { HashLoader } from 'react-spinners';
import { useState } from 'react';
import { FaAmilia } from 'react-icons/fa6';
import { FcAutomotive } from 'react-icons/fc';
import { IconContext } from 'react-icons';
import { useGlobalData } from '@/hooks/useGlobalContext';

export default function Home() {
	const data = useGlobalData();
	console.log(data);
	const [Loading, setLoading] = useState(true);
	return (
		<>
			<main className={styles.main}>
				<IconContext.Provider value={{ color: 'red', size: 50, className: 'abc' }}>
					<FaAmilia />
					<FcAutomotive />
				</IconContext.Provider>
				<div>
					<HashLoader color={'orange'} size={200} loading={Loading} cssOverride={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 10 }} />
					{/* placeholder를 blur 지정하면 미리 blur처리된 용량이 적은 이미지를 먼저 화면에 띄우고 최적화된 원본 로딩완료되면 바꿔치기 */}
					<Image
						src={pic1}
						alt='pic'
						fill
						quality={100}
						placeholder='blur'
						onLoadingComplete={() => {
							setLoading(false);
						}}
					/>
				</div>
				<div>
					{/* 기본적으로 이미지 컴포넌트를 lazy-loading적용 priority로 이미리 로딩 우선순위를 지정하면 자동으로 lazy-loading해제 보통 화면이 렌더링되면 보이는 첫번쨰 이미지에 지정 */}
					<Image src={pic2} alt='pic' fill quality={100} />
				</div>
				<div>
					<Image src={pic3} alt='pic' fill quality={100} />
				</div>
			</main>
		</>
	);
}
