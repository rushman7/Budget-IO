import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('filter defaults' , () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('filter sortby amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
})

test('filter sortBy date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  };
  const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' });
  expect(state.sortBy).toBe('date')
})

test('filter text', () => {
  const text = 'Hello World!';
  const action = { 
    type: 'SET_TEXT_FILTER',
    text
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text)
})

test('filter startDate', () => {
  const startDate = moment();
  const action = { type: 'SET_START_DATE', startDate };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toBe(startDate)
})

test('filter endDate', () => {
  const endDate = moment();
  const action = { type: 'SET_END_DATE', endDate };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toBe(endDate)
})