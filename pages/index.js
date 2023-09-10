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
					<Image src={pic2} alt='pic' fill quality={100} />
				</div>

				<div>
					<Image src={pic3} alt='pic' fill quality={100} />
				</div>
			</main>
		</>
	);
}
