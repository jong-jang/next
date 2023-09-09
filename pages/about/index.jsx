import { useState } from 'react';
import styles from './About.module.scss';
import firebase from '@/client/src/firebase';

function About() {
	const [Email, setEmail] = useState('');
	const [Pwd, setPwd] = useState('');
	const [Name, setName] = useState('');

	const handleSubmit = async (e) => {
		e.prevnetDefault();
		const createdUser = await firebase.auth().createUserWithEmailAndPassword(Email, Pwd);
		createdUser.user.updateProfile({ displayName: Name });
		// 회원가입해서 성공적으로 firebase에 정보값이 등록되자마자 강제로 로그아웃 처리
		firebase.auth().signOut();
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
					<input type='text' value={Name} onChange={(e) => setName(e.target.value)} />

					<button type='submit'>회원가입</button>
				</form>
			</main>
		</>
	);
}

export default About;
