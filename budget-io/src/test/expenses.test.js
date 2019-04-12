import { addExpense, editExpense, removeExpense } from '../actions/expenses';

test('remove expense', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('edit expense', () => {
  const action = editExpense('123abc', { note: 'New note value' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    updates: {
      note: 'New note value'
    },
    id: '123abc'
  });
});

test('add expense with value', () => {
  const data = {
    description: 'Rent',
    amount: 100000,
    createdAt: 1000,
    note: 'this is rent'
  }
  const action = addExpense(data);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...data,
      id: expect.any(String)
    }
  });
});

test('add expense default', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,      
      id: expect.any(String)
    }
  })
})