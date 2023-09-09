import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAQ9BZm-Z3uPW3L0mduprNhWaoTxOrd-QU',
	authDomain: 'next-project-972ea.firebaseapp.com',
	projectId: 'next-project-972ea',
	storageBucket: 'next-project-972ea.appspot.com',
	messagingSenderId: '369728077336',
	appId: '1:369728077336:web:46efb97f96a349e48f0d6d',
};

firebase.initializeApp(firebaseConfig);
export default firebase;
