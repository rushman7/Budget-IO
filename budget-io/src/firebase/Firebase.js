import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyChwU0BxmCxibT7XfsE2XWthgH8MWTXsiM",
  authDomain: "budget-io-489f5.firebaseapp.com",
  databaseURL: "https://budget-io-489f5.firebaseio.com",
  projectId: "budget-io-489f5",
  storageBucket: "budget-io-489f5.appspot.com",
  messagingSenderId: "324065239171"
};

firebase.initializeApp(config);

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { firebase, googleAuthProvider, facebookAuthProvider, database as default };