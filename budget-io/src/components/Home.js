import React, { Component } from 'react';
import ExpenseList from './ExpenseList';

class Home extends Component {
  render() {
    return (
      <div>
        <ExpenseList />
      </div>
    )
  }
}

export default Home;