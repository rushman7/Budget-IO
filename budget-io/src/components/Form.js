import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form action="">
          <input 
            type="text"
            placeholder="Description"
            autoFocus
          />
          <input 
            type="number"
            placeholder="Amount"
          />
          <textarea
            placeholder="Add a note for your expense.(optional)"
          >
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}

export default Form;