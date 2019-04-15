import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../data/data';

test('return 0', () => {
  const res = selectExpensesTotal([]);
  expect(res).toBe(0);
})

test('1 expense', () => {
  const res = selectExpensesTotal([expenses[0]]);
  expect(res).toBe(2000);
})