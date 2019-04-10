import React from 'react';
import { connect } from 'react-redux';
import Form from './Form';

const Edit = (props) => {
  return (
    <div>
      <Form 
        expense={props.expense}
        onSubmit={(expense) => {
          console.log(expense);
        }}
      />
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