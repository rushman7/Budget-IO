import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';


class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      focused: false,
      error: ''
    }
  }

  onDescriptionChange = (e) => {
    e.persist();
    this.setState(() => ({ description: e.target.value }));
  }

  onNoteChange = (e) => {
    e.persist();
    this.setState(() => ({ note: e.target.value }));
  }

  onAmountChange = (e) => {
    e.persist();
    if (!e.target.value || e.target.value.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount: e.target.value }))
    }
  }

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }))   
    }
  }

  onFocusedChange = ({ focused }) => {
    this.setState(() => ({ focused: focused }))
  }

  onSubmit = (e) => {
    e.preventDefault();
    
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide description and amount.' }));
    } else {
      this.setState(() => ({ error: ''}));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {this.state.error && <p className="error">{this.state.error}</p>}
        <input 
          type="text"
          placeholder="Description"
          className="text-input"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <input 
          type="text"
          placeholder="Amount"
          className="text-input"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <textarea
          className="form_text"
          placeholder="Add a note for your expense.(optional)"
          value={this.state.note}
          onChange={this.onNoteChange}
        />
        <div className="bottom_container">
          <SingleDatePicker 
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.focused}
            onFocusChange={this.onFocusedChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <button className="form_btn">Add Expense</button>
        </div>
      </form>
    )
  }
}

export default Form;