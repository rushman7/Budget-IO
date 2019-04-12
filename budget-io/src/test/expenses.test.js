import { addExpense, editExpense, removeExpense } from '../actions/expenses';

test('remove expense', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});