import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import storeSetup from './store/storeSetup';
import App from './App';
import './firebase/Firebase';

import './Styles/css/index.css';
import './index.css';

const store = storeSetup();

const app = (
  <Provider store={store}>
    <Router>
      <App /> 
    </Router>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));