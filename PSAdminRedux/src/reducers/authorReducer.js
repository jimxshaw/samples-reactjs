import * as types from "../actions/actionTypes";
import initialState from './initialState';

// A reducer takes in the state and an action and then
// returns a new state.
export default function authorReducer(state = initialState.authors, action) {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      //debugger;
      return action.authors;
    default:
      return state;
  }
}
