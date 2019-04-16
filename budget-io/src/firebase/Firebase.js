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

const database = firebase.database();

database.ref().set({
  name: 'Arthur Pisakhov',
  age: 25,
  isSingle: true,
  location: {
    city: 'Brooklyn',
    state: 'New York',
    country: 'USA'
  }
});