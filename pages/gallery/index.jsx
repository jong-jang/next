import { useGlobalData } from '@/hooks/useGlobalContext';
import styles from './Gallery.module.scss';

function Gallery() {
	const { LoginInfo } = useGlobalData();
	console.log(LoginInfo);
	return (
		<>
			<main className={styles.main}></main>
		</>
	);
}

export default Gallery;
