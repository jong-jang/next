import firebase from '@/firebase';

function Logout() {
	return (
		<div>
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
