import React from 'react';
import { startRemoveExpense } from '../actions/expenses';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, dispatch, description, amount, createdAt }) => (
  <div className="item_container">
    <h3 className="item_description">{description}</h3>
    <p className="item_amount">{numeral(amount / 100).format('$0,0.00')} - {moment(createdAt).format('MMM Do, YYYY')}</p>
    <Link to={`/edit/${id}`}>
      <button className="item_edit_btn">Edit</button>
    </Link>
    <button
      className="item_remove_btn"
      onClick={() => {
      dispatch(startRemoveExpense({ id }))}}>Remove</button>
  </div>
)

export default connect()(ExpenseListItem);