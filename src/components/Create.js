import React from 'react';
import Form from './Form';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';


const Create = (props) => (
  <div>
    <div className="budget_container">
      <div className="content-container">
        <h1 className="budget_title">Add Expense</h1>
      </div>
    </div>
    <div className="content-container">
      <Form 
        onSubmit={(expense) => {
          props.dispatch(startAddExpense(expense));
          props.history.push('/');
        }}
      />
    </div>
  </div>
)


export default connect()(Create);