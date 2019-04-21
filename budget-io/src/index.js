import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from "react-router-dom";
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import storeSetup from './store/storeSetup';
import App from './App';
import { firebase } from './firebase/Firebase';
import { createBrowserHistory } from 'history';

import './Styles/css/index.css';
import './index.css';

const history = createBrowserHistory();

const store = storeSetup();

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(app, document.getElementById('root'));
    hasRendered = true;
  }
};

const app = (
  <Provider store={store}>
    <Router history={history}>
      <App /> 
    </Router>
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/home');
      }
      console.log('Logged In:', user.uid)
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/')
    console.log('Logged Out!')
  }
});