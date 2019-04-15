import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

class ExpensesSummary extends React.Component {
  constructor({ expensesCount, expensesTotal }) {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      expensesCount: expensesCount,
      expensesTotal: expensesTotal,
      budget: 0,
      error: ''
    }
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('budget');
      const budget = JSON.parse(json);

      if (budget) {
        this.setState(() => ({
          budget: budget
        }))
      }
    } catch (e) {

    }
  }

  componentDidUpdate() {
    if (this.state.budget) {
      const json = JSON.stringify(this.state.budget);
      localStorage.setItem('budget', json);
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    
    if (!this.state.budget) {
      this.setState(() => ({ error: 'Please provide a monthly budget.' }));
    } else {
      this.setState({
        error: '',
        budget: parseFloat(this.state.budget, 10) * 100,
      })
    }
  }

  onAmountChange = (e) => {
    e.persist();
    if (!e.target.value || e.target.value.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ budget: e.target.value }))
    }
  }

  render () {
    const expenseWord = this.expensesCount === 1 ? 'expense' : 'expenses';
    const formattedExpenesTotal = numeral(this.state.expensesTotal / 100).format('$0,0.00');
    const formattedBudget = numeral(this.state.budget).format('$0,0.00');
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input 
            type="text" 
            name="option" 
            onChange={this.onAmountChange}/>
          <button>Set Budget</button>
        </form>
        <h1>Your Monthly Budget: {formattedBudget}</h1>
        <h1>Viewing {this.state.expensesCount} {expenseWord} totalling {formattedExpenesTotal}</h1>
      </div>
    )
  }
}

const mapeStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expensesCount: visibleExpenses.length, 
    expensesTotal: selectExpensesTotal(visibleExpenses)
  }
};

export default connect(mapeStateToProps)(ExpensesSummary);