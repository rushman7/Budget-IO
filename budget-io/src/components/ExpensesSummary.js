import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

class ExpensesSummary extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      budget: 0 / 100,
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
        budget: parseFloat(this.state.budget, 10),
      })
    }
  }

  onAmountChange = (e) => {
    e.persist();
    if (!e.target.value || e.target.value.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ budget: e.target.value * 100 }))
    }
  }

  render() {
    const expenseWord = this.props.expensesCount === 1 ? 'expense' : 'expenses';
    const formattedExpenesTotal = numeral(this.props.expensesTotal / 100).format('$0,0.00');
    const formattedBudget = numeral(this.state.budget / 100).format('$0,0.00');
    const remainingBudget = numeral((this.state.budget - this.props.expensesTotal) / 100).format('$0,0.00')
    const normalRemainingBudget = (this.state.budget - this.props.expensesTotal)
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
        <h3>Your Monthly Budget: {formattedBudget}</h3>
        <h3>Viewing {this.props.expensesCount} {expenseWord} totalling {formattedExpenesTotal}</h3>
        <h3>
          {
            normalRemainingBudget < 0 ? 
            <p>You have exceeded your monthly budget: {remainingBudget}</p> : 
            <p>Remaining monthly budget: {remainingBudget}</p>
          }
        </h3>
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