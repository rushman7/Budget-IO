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

// database.ref('expenses').push({
//   description: "Rent",
//   note: 'for rent',
//   amount: 100000,
//   createdAt: '01/19'
// })


database.ref('expenses')
  .on('value', (snapshot) => {
    const expenses = [];

    snapshot.forEach((snap) => {
      expenses.push({
        id: snap.key,
        ...snap.val()
      });
    });
    console.log('Expenses: ', expenses)
});

// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log('Removed: ', snapshot.key)
})

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log('Updated: ', snapshot.key)
})
