import { combineReducers } from "redux";
// Using an alias courses instead of the long name courseReducer.
import courses from "./courseReducer";

const rootReducer = combineReducers({
  courses: courses
});

export default rootReducer;
