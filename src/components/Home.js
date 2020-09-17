import React, { Component } from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

class Home extends Component {
  render() {
    return (
      <div>
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpenseList />
      </div>
    )
  }
}

export default Home;