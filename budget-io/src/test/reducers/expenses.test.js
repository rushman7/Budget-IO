import expensesReducers from '../../reducers/expense';
import expenses from '../data/data';

test('default state', () => {
  const state = expensesReducers(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('remove state', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual([ expenses[0], expenses[2] ])
});

test('not remove state', () => {
  const action = {
    type:'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual(expenses)
});

test('add expense', () => {
  const expense = {
    id: '4',
    description: 'New Thing',
    note: '',
    createdAt: 20000,
    amount: 500
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducers(expenses, action);
  expect(state).toEqual([
    ...expenses,
    action.expense
  ])
});

test('edit expense', () => {
  const amount = 122000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount
    }
  };
  const state = expensesReducers(expenses, action);
  expect(state[1].amount).toBe(amount);
})


test('not edit expense', () => {
  const amount = 122000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount
    }
  };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual(expenses);
})