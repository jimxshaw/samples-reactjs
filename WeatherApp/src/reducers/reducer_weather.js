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
export default function(state = null, action) {
  

  return state;
}



























