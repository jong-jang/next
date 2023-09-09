import Image from 'next/image';
import styles from './Home.module.scss';
import pic1 from '@/public/img/pic1.jpg';
import pic2 from '@/public/img/pic2.jpg';
import pic3 from '@/public/img/pic3.jpg';
import { HashLoader } from 'react-spinners';
import { useState } from 'react';
import { FaAdn } from 'react-icons/fa';
import { FcAbout } from 'react-icons/fc';
import { FiAirplay } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import { useGlobalData } from '@/hooks/useGlobalContext';
import { useEffect } from 'react';
import firebase from '@/firebase';
//npm i react-icons

export default function Home() {
	const { setLoginInfo } = useGlobalData();
	const [Loading, setLoading] = useState(true);

	useEffect(() => {
		firebase.auth().onAuthStateChanged((userInfo) => {
			console.log(userInfo);
			//firebase의 인증정보값이 바뀔떄마다 해당 값이 없으면 전역객체의 값을 비워주고
			//있으면 전달받은 값으로 덮어쓰기
			if (userInfo === null) setLoginInfo({ displayName: '', uid: '' });
			else setLoginInfo(userInfo.multiFactor.user);
		});
	}, [setLoginInfo]);

	return (
		<>
			<main className={styles.main}>
				<IconContext.Provider value={{ color: 'red', size: 50, className: 'abc' }}>
					<FaAdn />
					<FcAbout />
					<FiAirplay />
				</IconContext.Provider>

				<div>
					<HashLoader color={'orange'} size={200} loading={Loading} cssOverride={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 10 }} />
					{/* placeholder를 blur지정하면 미리 blur처리된 용량이 적은 이미지를 먼저 화면에 띄우고 최적화된 원본 로딩완료되면 바꿔치기 */}
					<Image src={pic1} alt='pic' fill quality={100} placeholder='blur' />
				</div>

				<div>
					<Image
						src='https://images.unsplash.com/photo-1647891938250-954addeb9c51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
						alt='pic'
						fill
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						quality={100}
						priority
						onLoadingComplete={() => setLoading(false)}
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
