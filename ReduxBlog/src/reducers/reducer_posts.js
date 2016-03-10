// All reducers must be registered with reducers/index.js.
import {FETCH_POSTS, FETCH_POST} from "../actions/index";

// Declare our initial state. The all key has for its value an array that holds all 
// of our blog posts from our index / route. The post key is our individual post, 
// which is initialized as the default value of null.  
const INITIAL_STATE = {
  all: [],
  post: null
};

// Two reminders:
// First, with redux-promise and axios, the data we care about is going to be available 
// on action.payload.data. Second, our reducer needs to return a new object whenever we 
// return our state. 
export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_POSTS:
      // This new object is distinctly a new version of our state. The ...state means 
      // take in our current state and add the all property with our data as the value.
      return {...state, all: action.payload.data};
    case FETCH_POST:
      // We get a partcular post by id with our action creator in actions/index.js. This 
      // reducer captures that action's payload data, a single post, and assign to our 
      // initial state const's property called post.
      return {...state, post: action.payload.data};
    default:
      return state;
  }
}























