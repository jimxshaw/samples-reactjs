import React, {Component} from "react";
import {connect} from "react-redux";

// WeatherList has to be a container instead of a component because it needs 
// access to the redux application state. SearchBar captures the user city 
// input and calls the fetchWeather action creator, which calls the external 
// weather API. The API weather data is captured in an action that gets passed 
// to all reducers, which then returns a new redux application state. This 
// WeatherList container takes the redux application state and returns JSX. 
// App.js then displays the WeatherList container with its data in a view. 

class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    );
  }
}

// The application state argument comes from the index reducer's const rootReducer. 
function mapStateToProps(state) {
  return {weather: state.weather};
}
// function mapStateToProps({weather}) {
//   return {weather}; // This ES6 syntax is identical to the above mapStateToProps.
// }

export default connect(mapStateToProps)(WeatherList);





































