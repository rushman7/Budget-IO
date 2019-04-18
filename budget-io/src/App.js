import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import Edit from './components/Edit';
import NotFound from './components/NotFound';
import Login from './components/Login';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import './firebase/Firebase';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path ="/" component={Login} />
          <AuthenticatedRoute path="/home" component={Home} />
          <AuthenticatedRoute path="/create" component={Create} />
          <AuthenticatedRoute path="/edit/:id" component={Edit} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
