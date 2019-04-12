import moment from 'moment';
import { 
  setTextFilter, 
  sortByDate, 
  sortByAmount, 
  setStartDate, 
  setEndDate
} from '../../actions/filters';

test('start date', () => {
  const time = moment()
  const action = setStartDate(time);
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: time
  })
})

test('end date', () => {
  const time = moment()
  const action = setEndDate(time);
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: time
  })
})

test('sort amount', () => {
  const action = sortByAmount(500);
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  })
})

test('sort date', () => {
  const action = sortByDate(moment());
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  })
})

test('filter text', () => {
  const action = setTextFilter('Hello World!');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'Hello World!'
  })
})

test('filter text default', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})