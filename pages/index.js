import Head from 'next/head';
import styles from './Home.module.scss';
console.log(styles);

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='main'>
				<h1>Hello</h1>
			</main>
		</>
	);
}
