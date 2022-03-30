import { combineReducers } from 'redux';
import statusReducer from './categories/categories';
import books from './books/books';

const rootReducer = combineReducers({
  books,
  statusReducer,
});

export default rootReducer;
