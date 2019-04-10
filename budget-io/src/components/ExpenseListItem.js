import React from 'react';
import { removeExpense } from '../actions/expenses';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, dispatch, description, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
    <Link to={`/edit/${id}`}>
      <button>Edit</button>
    </Link>
    <button onClick={() => {
      dispatch(removeExpense({ id }))}}>Remove</button>
  </div>
)

export default connect()(ExpenseListItem);