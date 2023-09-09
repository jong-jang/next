import Link from 'next/link';
import styles from './Header.module.scss';
import { useRouter } from 'next/router';
import Login from '../Login';
import { useGlobalData } from '@/hooks/useGlobalContext';
import Logout from '../Logout';

function Header() {
	const { LoginInfo, setLoginInfo } = useGlobalData();
	const url = useRouter().asPath;
	return (
		<header className={styles.header}>
			<h1>
				<Link href='/'>LOGO</Link>
			</h1>

			{!LoginInfo.uid ? <Login /> : <Logout />}

			<ul className={styles.gnb}>
				<li>
					<Link href='/about'>About</Link>
				</li>
				<li>
					<Link href='/gallery'>Gallery</Link>
				</li>
				<li>
					<Link href='ssg'>SSG</Link>
				</li>
				<li>
					<Link href='ssr'>SSR</Link>
				</li>
				<li>
					<Link href='isr'>ISR</Link>
				</li>
				<li>
					<Link href='csr'>CSR</Link>
				</li>
				<li>
					<Link href='post'>Post</Link>
				</li>
			</ul>
		</header>
	);
}

export default Header;
