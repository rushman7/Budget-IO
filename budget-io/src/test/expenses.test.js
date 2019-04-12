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