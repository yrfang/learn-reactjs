import { combineReducers } from 'redux';
import bookReducer from './reducer_books';

const rootReducer = combineReducers({
  books: bookReducer
});

export default rootReducer;
