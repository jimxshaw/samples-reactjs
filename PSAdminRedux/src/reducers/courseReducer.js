import * as types from "../actions/actionTypes";

// A reducer takes in the state and an action and then
// returns a new state.
export default function courseReducer(state = [], action) {
  switch(action.type) {
    case types.LOAD_COURSES_SUCCESS:
      //debugger;
      return action.courses;
    default:
      return state;
  }
}
