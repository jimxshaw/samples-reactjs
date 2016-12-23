// A reducer takes in the state and an action and then
// returns a new state.
export default function courseReducer(state = [], action) {
  switch(action.type) {
    case "CREATE_COURSE":
      // ES6 spread operator.
      return [...state, Object.assign({}, action.course)];
    default:
      return state;
  }
}
