import { useState } from 'react';
import firebase from '@/firebase';

function Login() {
	const [Email, setEmail] = useState('');
	const [Pwd, setPwd] = useState('');
	const [Err, setErr] = useState('');

	const handleLogin = async () => {
		if (!Email || !Pwd) return alert('모든 항목을 입력하세요');

		try {
			//firebase로 받은 정보값이 있으면 useGlobalData hook으로 전역객체에 해당 값을 담아줌
			await firebase.auth().signInWithEmailAndPassword(Email, Pwd);
			alert('로그인되었습니다.');
		} catch (err) {
			//firebase로 받은 정보값이 없으면 hook으로 전역객체에 값을 비워줌
			if (err.code === 'auth/user-not-found') setErr('존재하지 않는 이메일입니다.');
			else if (err.code === 'auth/wrong-password') setErr('비밀번호 정보가 일치하지 않습니다.');
			else setErr('로그인에 실패했습니다.');
		}
	};

	return (
		<div>
			<input type='email' placeholder='이메일주소' value={Email} onChange={(e) => setEmail(e.target.value)} />
			<input type='password' placehodlder='비밀번호' value={Pwd} onChange={(e) => setPwd(e.target.value)} />
			<button onClick={handleLogin}>로그인</button>
		</div>
	);
}

export default Login;
