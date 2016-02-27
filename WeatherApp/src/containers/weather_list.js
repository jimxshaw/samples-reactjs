import React, {Component} from "react";
import {connect} from "react-redux";
import Chart from "../components/chart";
import GoogleMap from "../components/google_map";

// WeatherList has to be a container instead of a component because it needs 
// access to the redux application state. SearchBar captures the user city 
// input and calls the fetchWeather action creator, which calls the external 
// weather API. The API weather data is captured in an action that gets passed 
// to all reducers, which then returns a new redux application state. This 
// WeatherList container takes the redux application state and returns JSX. 
// App.js then displays the WeatherList container with its data in a view. 

class WeatherList extends Component {
  // This renderWeather function takes in the data for a particular city from 
  // our props.weather array. Since each array element must have a unique 
  // identifier, a key is added to the top-most JSX tag. The city name is used 
  // as the key, since every city is unique.
  renderWeather(cityData) {
    const cityName = cityData.city.name;
    // Grab our list of temperatures in kelvin and assign it to an array called temps.
    const temps = cityData.list.map(weather => ((weather.main.temp - 273.15) * 1.8 + 32));
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const lon = cityData.city.coord.lon;
    const lat = cityData.city.coord.lat;
    // const {lon, lat} = cityData.city.coord; // ES6 syntax to pull both lon & lat from coord.

    // The Chart component expects two values for its props.data and props.color.
    return (
      <tr key={cityName}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} units="F" color="teal"/></td>
        <td><Chart data={pressures} units="hPa" color="navy"/></td>
        <td><Chart data={humidities} units="%" color="orange"/></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

// What property of state are we mapping to our props for WeatherList? It's the weather 
// array containing cities and their weather info retrieved from the external API.
function mapStateToProps(state) {
  return {weather: state.weather};
}
// function mapStateToProps({weather}) {
//   return {weather}; // This ES6 syntax is identical to the above mapStateToProps.
// }

// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
export default connect(mapStateToProps)(WeatherList);





































