import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import storeSetup from './store/storeSetup';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import App from './App';

import './Styles/css/index.css';
import './index.css';

const store = storeSetup();

store.dispatch(addExpense({ description: 'Water Bill', amount: 4500 })); 
store.dispatch(addExpense({ description: 'Gas Bill' }));
// store.dispatch(setTextFilter('water'));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const app = (
  <Provider store={store}>
    <Router>
      <App /> 
    </Router>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));