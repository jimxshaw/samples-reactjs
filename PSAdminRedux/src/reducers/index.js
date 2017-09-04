import {combineReducers} from "redux";
// Using an alias courses instead of the long name courseReducer.
import courses from "./courseReducer";
import authors from './authorReducer';

const rootReducer = combineReducers({
  courses: courses,
  authors: authors
});

export default rootReducer;
