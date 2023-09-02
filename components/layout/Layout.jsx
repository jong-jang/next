import Head from 'next/head';
import styles from './Layout.module.scss';

function Layout({ children }) {
	return (
		<>
			<Head>
				<title>Main Page</title>
			</Head>
			<main class={styles.layout}>{children}</main>;
		</>
	);
}

export default Layout;
