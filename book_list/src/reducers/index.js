import { combineReducers } from 'redux';
import bookReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  books: bookReducer,
  ActiveBook: ActiveBook
});

export default rootReducer;
