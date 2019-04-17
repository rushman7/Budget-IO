import { createStore, combineReducers, applyMiddleware } from 'redux';
import expensesReducer from '../reducers/expense';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-think';

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        }),
        applyMiddleware(thunk)
    ); 

    return store;
}
