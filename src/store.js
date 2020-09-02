import { createStore, combineReducers } from 'redux';
import books from './reducers/books';

const rootReducer = combineReducers({
    bookReducer: books
});

export default createStore(rootReducer);