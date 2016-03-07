import { combineReducers } from 'redux';
import PostsReducer from "./reducer_posts";
// Import redux-form, grab the reducer object from it and alias 
// it as formReducer. Aliasing is used as a convention to avoid 
// naming conflicts in case other kinds of reducers are imported.
import {reducer as formReducer} from "redux-form";

// Using the form key for our formReducer is vital. It has to be 
// named form. 
const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
