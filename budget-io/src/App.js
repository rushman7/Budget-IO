import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import Help from './components/Help';
import Edit from './components/Edit';
import NotFound from './components/NotFound';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1>Hello</h1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create" component={Create} />
          <Route path="/help" component={Help} />
          <Route path="/edit/:id" component={Edit} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
