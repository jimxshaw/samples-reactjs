import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

// This is the mapping of our state. For example, when the app runs,
// it has a state called books. The value of books state is the 
// return value from the BooksReducer function.
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
