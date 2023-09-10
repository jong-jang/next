import firebase from '@/firebase';
import { useGlobalData } from '@/hooks/useGlobalContext';

function Logout() {
	const { LoginInfo } = useGlobalData();
	return (
		<div>
			<span>
				<strong>{LoginInfo.displayName}</strong>님 반갑습니다.
			</span>
			<button
				onClick={() => {
					firebase.auth().signOut();
					alert('로그아웃 되었습니다.');
				}}
			>
				로그아웃
			</button>
		</div>
	);
}

export default Logout;
