import Head from 'next/head';
import styles from './Layout.module.scss';
import { useRouter } from 'next/router';
import Header from '../header/Header';

function Layout({ children }) {
	const router = useRouter();
	const title = router.asPath.split('/')[1];
	const Title = title.charAt(0).toUpperCase() + title.slice(1) || 'Home';
	return (
		<>
			<Head>
				<title>{`${Title} Page`}</title>
			</Head>
			<Header />
			<main className={styles.layout}>
				<h1>{Title}</h1>
				{children}
			</main>
			;
		</>
	);
}

export default Layout;
