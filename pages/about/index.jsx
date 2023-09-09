import styles from './About.module.scss';

function About() {
	const [Email, setEmail] = useState('');
	const [Pwd, setPwd] = useState('');

	const handleSubmit = async (e) => {
		e.prevnetDefault();
	};

	return (
		<>
			<main className={styles.main}>
				<h2>Join Member</h2>

				<form onSubmit={handleSubmit}>
					<input type='email' value={Email} onChange={(e) => setEmail(e.target.value)} />
					<br />
					<input type='password' value={Pwd} onChange={(e) => setPwd(e.target.value)} />
					<br />

					<button type='submit'>회원가입</button>
				</form>
			</main>
		</>
	);
}

export default About;
