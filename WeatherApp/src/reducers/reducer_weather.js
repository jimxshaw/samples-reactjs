import {FETCH_WEATHER} from "../actions/index";

// Be aware that the action passed in to this reducer is NOT the 
// original payload from the action creator fetcherWeather. The 
// fetchWeather action creator has axios.get that returns a promise and 
// is assigned to const request. The middleware redux-promise sees the promise, 
// stops it in its tracks and then immediately resolves the returned promise first. 
// The promise resolution returns a new, modified action. Only after the promise 
// solution by redux-promise, either by modification or simply letting it pass 
// through untouched, will the resultant request be assigned to the action's 
// payload. The resultant action is what's being passed in to reducers.

// What if an action creator's action doesn't have a promise? That's ok, 
// redux-promise middleware will simply let the action pass through to 
// the reducers automatically. It's akin to what happens to actions if 
// redux-promise middleware was never added to a project in the first place.   
export default function(state = [], action) {
  // The initial state is an array so that we can store weather data for 
  // multiple cities. 
  switch (action.type) {
    case FETCH_WEATHER:
      // We only grab the data property of the payload because it contains 
      // all the weather info we need. Other properties such as payload.headers 
      // or payload.status etc. are not necessary for the app we're building.
      // Since we're holding multiple cities in an array, why aren't we using 
      // state.push(action.payload.data) instead? The reason is we NEVER want 
      // to mutate the state. We ALWAYS want to return a new state to replace 
      // the old state. If push is used, that's state mutation and will cause 
      // trouble while concat wipes away the old state and returns a new state 
      // with the new city data added. This a MAJOR TRAP. Do not ever mutate state.  
      return state.concat([action.payload.data]);
      // return [action.payload.data, ...state]; // This is the ES6 equivalent of the above line.
  }

  return state;
}



























