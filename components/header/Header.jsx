import Link from 'next/link';
import styles from './Header.module.scss';
import { useRouter } from 'next/router';

function Header() {
	const url = useRouter().asPath;

	return (
		<header className={styles.header}>
			<h1>
				<Link href='/'>LOGO</Link>
			</h1>
			<ul className={styles.gnb}>
				<li>
					<Link href='/about' className={url === '/about' ? styles.on : ''}>
						About
					</Link>
				</li>
				<li>
					<Link href='./gallery' className={url === '/gallery' ? styles.on : ''}>
						Gallery
					</Link>
				</li>
				<li>
					<Link href='./ssg' className={url === '/ssg' ? styles.on : ''}>
						SSG
					</Link>
				</li>
				<li>
					<Link href='./ssr' className={url === '/ssr' ? styles.on : ''}>
						SSR
					</Link>
				</li>
				<li>
					<Link href='./isr' className={url === '/isr' ? styles.on : ''}>
						ISR
					</Link>
				</li>
				<li>
					<Link href='./csr' className={url === '/csr' ? styles.on : ''}>
						CSR
					</Link>
				</li>
				<li>
					<Link href='./post' className={url === '/post' ? styles.on : ''}>
						Post
					</Link>
				</li>
			</ul>
		</header>
	);
}

export default Header;
