import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyChwU0BxmCxibT7XfsE2XWthgH8MWTXsiM",
  authDomain: "budget-io-489f5.firebaseapp.com",
  databaseURL: "https://budget-io-489f5.firebaseio.com",
  projectId: "budget-io-489f5",
  storageBucket: "budget-io-489f5.appspot.com",
  messagingSenderId: "324065239171"
};

firebase.initializeApp(config);

firebase.database().ref().set({
  name: 'Arthur Pisakhov'
});