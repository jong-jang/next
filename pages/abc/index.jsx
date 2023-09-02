import styles from './error.module.scss';

function Error() {
	return (
		<>
			<main className={styles.error}>
				<p>요청하는 페이지의 URL이 없습니다.</p>
			</main>
		</>
	);
}

export default Error;
