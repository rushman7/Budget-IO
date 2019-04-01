import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import AddExpense from './components/AddExpense';
import Help from './components/Help';
import Edit from './components/Edit';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/addExpense" component={AddExpense} />
        <Route exact path="/help" component={Help} />
        <Route exact path="/edit" component={Edit} />
      </div>
    );
  }
}

export default App;
