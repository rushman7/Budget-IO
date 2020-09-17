import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import Edit from './components/Edit';
import NotFound from './components/NotFound';
import Login from './components/Login';
import AuthRoute from './components/AuthRoute';
import NonAuthRoute from './components/NonAuthRoute';
import Signup from './components/Signup';
import './firebase/Firebase';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <NonAuthRoute exact path ="/" component={Login} />
          <NonAuthRoute exact path ="/signup" component={Signup} />
          <AuthRoute path="/home" component={Home} />
          <AuthRoute path="/create" component={Create} />
          <AuthRoute path="/edit/:id" component={Edit} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
