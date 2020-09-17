import React from 'react';
import { connect } from 'react-redux';
import Form from './Form';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

const Edit = (props) => {
  return (
    <div>
      <Form 
        expense={props.expense}
        onSubmit={(expense) => {
          props.dispatch(startEditExpense(props.expense.id, expense));
          props.history.push('/');
        }}
      />
      <button 
        className="header_btn"
        onClick={() => {
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