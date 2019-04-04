import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expense';
import filtersReducer from '../reducers/filters';

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        })
    ); 

    return store;
}
