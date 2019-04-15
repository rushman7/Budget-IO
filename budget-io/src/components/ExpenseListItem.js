import React from 'react';
import { removeExpense } from '../actions/expenses';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, dispatch, description, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>{numeral(amount / 100).format('$0,0.00')} - {moment(createdAt).format('MMM Do, YYYY')}</p>
    <Link to={`/edit/${id}`}>
      <button>Edit</button>
    </Link>
    <button onClick={() => {
      dispatch(removeExpense({ id }))}}>Remove</button>
  </div>
  
)

export default connect()(ExpenseListItem);