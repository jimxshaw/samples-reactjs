// Every reducer has two parameters, the state and action. They 
// are optional. Reducers are only ever called when an action 
// occurs. The state argument is NOT the application state but 
// only the state for which this specific reducer is responsible.
// For example, if this reducer returned a number then in the 
// body you can write something like state += 2. So then state 
// would have 2 added to it whenever the action happens.

// When the app starts for the first time, state doesn't have a 
// value so it will return undefined. Reducers cannot return 
// undefined. They must have a value. Hence we force state to 
// have a default value of null with ES6 syntax state = null. 
export default function(state = null, action) {
  // An action has a type and a payload. If the passed in action's 
  // type is "BOOK_SELECTED" then return that action's payload, the 
  // book selected by the user.
  switch(action.type) {
    case "BOOK_SELECTED":
      return action.payload; 
  }

  // If we don't care about the action, we simply ignore it and 
  // return the same state.
  return state;
}






































