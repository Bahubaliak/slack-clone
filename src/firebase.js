import firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyB7nHgnVKUlSEy4r42PX46eX_cX6vOMJ3k",
	authDomain: "slack-clone-10fcc.firebaseapp.com",
	projectId: "slack-clone-10fcc",
	storageBucket: "slack-clone-10fcc.appspot.com",
	messagingSenderId: "714206428152",
	appId: "1:714206428152:web:d80db6154b622a3c6f740d",
	measurementId: "G-PT5MQHMF1V"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db } ;