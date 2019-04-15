import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

class ExpensesSummary extends React.Component {
  constructor({ expensesCount, expensesTotal }) {
    super({ expensesCount, expensesTotal });
      this.state = {
        expensesCount: expensesCount,
        expensesTotal: expensesTotal
      }
  }

  render () {
    const expenseWord = this.expensesCount === 1 ? 'expense' : 'expenses';
    const formattedExpenesTotal = numeral(this.state.expensesTotal / 100).format('$0,0.00');
    return (
      <div>
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