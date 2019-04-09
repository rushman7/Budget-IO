import React from 'react';

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      description: '',
      note: '',
      amount: ''
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