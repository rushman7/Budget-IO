import React from 'react';
import Form from './Form';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';


const Create = (props) => (
  <div>
    <Form 
      onSubmit={(expense) => {
        props.dispatch(startAddExpense(expense));
        props.history.push('/');
      }}
    />
  </div>
)


export default connect()(Create);