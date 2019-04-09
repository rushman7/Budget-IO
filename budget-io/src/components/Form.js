import 'react-dates/initialize';
import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


const date = moment();
console.log(date.format('MMM Do, YYYY'));

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      description: '',
      note: '',
      amount: '',
      createdAt: moment(),
      focused: false
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
    if (e.target.value.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount: e.target.value }))
    }
  }

  onDateChange = (createdAt) => {
    this.setState(() => ({ createdAt }))
  }

  onFocusedChange = ({ focused }) => {
    this.setState(() => ({ focused: focused }))
  }

  render() {
    return (
      <div>
        <form action="">
          <input 
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input 
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker 
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.focused}
            onFocusChange={this.onFocusedChange}
            numberOfMonths={1}
          />
          <textarea
            placeholder="Add a note for your expense.(optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}

export default Form;