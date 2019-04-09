import React from 'react';

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      description: '',
      note: ''
    }
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  }

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
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
            type="number"
            placeholder="Amount"
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