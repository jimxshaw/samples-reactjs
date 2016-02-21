import { combineReducers } from "redux";
import BooksReducer from "./reducer_books";
import ActiveBook from "./reducer_active_book";

// This is the mapping of our state. For example, when the app runs,
// it has a state called books. The value of books state is the 
// return value from the BooksReducer function.
// As more reducers are written, add them to the combineReducers call 
// so they'll become other pieces of our global state.
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
