import { useState } from 'react';

function Login() {
	const [Email, setEmail] = useState('');
	const [Pwd, setPwd] = useState('');
	const [Err, setErr] = useState('');

	const handleLogin = () => {
		if (!Email || !Pwd) return alert('모든 항목을 입력하세요.');

		try {
			//firebase로 받은 정보값이 있으면 useGlobalData hook으로 전역객체에 해당 값을 담아줌
		} catch (err) {
			//firebase로 받은 정보값이 없으면 hook으로 전역객체에 값을 비워줌
		}
	};

	return (
		<div>
			<input type='email' placeholder='이메일주소' value={Email} onChange={(e) => setEmail(e.target.value)} />
			<input type='password' placeholder='비밀번호입력' value={Pwd} onChange={(e) => setPwd(e.target.value)} />
			<button onClick={handleLogin}>로그인</button>
		</div>
	);
}

export default Login;
