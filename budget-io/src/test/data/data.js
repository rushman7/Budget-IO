import moment from 'moment';

export default [
  {
    id: '1',
    description: 'Gas',
    note: '',
    amount: 2000,
    createdAt: 0
  },
  {
    id: '2',
    description: 'Coffee',
    note: '',
    amount: 250,
    createdAt: moment(0).subtract(4, 'days').valueOf()
  },
  {
    id: '3',
    description: 'Mobile Game',
    note: '',
    amount: 600,
    createdAt: moment(0).add(4, 'days').valueOf()
  }
];