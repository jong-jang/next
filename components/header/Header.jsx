import Link from 'next/link';
import styles from './Header.module.scss';
import { useRouter } from 'next/router';
import Login from '../Login';
import { useGlobalData } from '@/hooks/useGlobalContext';
import Logout from '../Logout';
import { useState, useEffect, useRef } from 'react';

function Header() {
	const firstLoaded = useRef(true);
	const { LoginInfo } = useGlobalData();
	const url = useRouter().asPath;

	useEffect(() => {
		//state는 변경되었을때 다음번 랜더링 타이밍에 적용되지만
		//useRef값은 해당 사이클에 바로 적용되므로
		//useRef로 firstLoaded값으로 로그인, 로그아웃 컴포넌트 분기처리
		firstLoaded.current = false;
	}, [LoginInfo]);
	return (
		<header className={styles.header}>
			<h1>
				<Link href='/'>LOGO</Link>
			</h1>

			{/* 처음 로그인시에는 null리턴, 처음 로그인이 아닐때는 다시 중첩 3항 연산자로 Login, Logout 분기처리 */}
			{!firstLoaded.current ? !LoginInfo.uid ? <Login /> : <Logout /> : null}

			<ul className={styles.gnb}>
				<li>
					<Link href='/about' className={url === '/about' ? styles.on : ''}>
						About
					</Link>
				</li>
				<li>
					<Link href='/gallery' className={url === '/gallery' ? styles.on : ''}>
						Gallery
					</Link>
				</li>
				<li>
					<Link href='/ssg' className={url === '/ssg' ? styles.on : ''}>
						SSG
					</Link>
				</li>
				<li>
					<Link href='/ssr' className={url === '/ssr' ? styles.on : ''}>
						SSR
					</Link>
				</li>
				<li>
					<Link href='/isr' className={url === '/isr' ? styles.on : ''}>
						ISR
					</Link>
				</li>
				<li>
					<Link href='/csr' className={url === '/csr' ? styles.on : ''}>
						CSR
					</Link>
				</li>
				<li>
					<Link href='/post' className={url === '/post' ? styles.on : ''}>
						Post
					</Link>
				</li>
			</ul>
		</header>
	);
}

export default Header;
