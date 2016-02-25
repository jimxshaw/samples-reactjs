// Axios is a promise based HTTP client for the browser.
import axios from "axios";

// This is openweathermap.org's public API key.
const API_KEY = "44db6a862fba0b067b1930da0d769e98";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// This is an action creater that will make an API request to 
// fetch weather data. 
// Action creaters return an action object and, at the minimum, 
// the action must contain a type.
// By convention, a single variable is made to hold our action type.
// We then assign the const variable to the type. Reducers will then 
// be able to import the const and use it thus bypassing having to 
// reference a type that's a string. 
export const FETCH_WEATHER = "FETCH_WEATHER";  

// Whenever fetchWeather is called, a city name string is passed in.
export function fetchWeather(city) {
  // Open Weather Map's API call is the ROOT_URL plus q={city name},{country code}, 
  // which is the query string. Since this is a test app, we'll default the country 
  // code to us. 
  const url = `${ROOT_URL}&q=${city},us`;

  // Axios is used for our ajax requests. Take the url above with our query string 
  // and make a get request with it. A promise is returned and assigned to a const. 
  // This serves as the payload in our action. 
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}













