import React from 'react';
import { connect } from 'react-redux';
import Form from './Form';
import { editExpense, startRemoveExpense } from '../actions/expenses';

const Edit = (props) => {
  return (
    <div>
      <Form 
        expense={props.expense}
        onSubmit={(expense) => {
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push('/');
        }}
      />
      <button onClick={() => {
        props.dispatch(startRemoveExpense(props.expense))
        props.history.push('/');
      }}>Remove</button>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      (expense) => expense.id === props.match.params.id
    )}
};

export default connect(mapStateToProps)(Edit);