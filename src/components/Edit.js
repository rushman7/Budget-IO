import React from 'react';
import { connect } from 'react-redux';
import Form from './Form';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

const Edit = (props) => {
  return (
    <div>
      <div className="budget_container">
        <div className="content-container">
          <h1 className="budget_title">Edit Expense</h1>
        </div>
      </div>
      <div className="content-container">
        <Form 
          expense={props.expense}
          onSubmit={(expense) => {
            props.dispatch(startEditExpense(props.expense.id, expense));
            props.history.push('/');
          }}
        />
        <button 
          className="form_btn_rmv"
          onClick={() => {
          props.dispatch(startRemoveExpense(props.expense))
          props.history.push('/');
        }}>Remove Expense</button>
      </div>
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