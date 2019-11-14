import axios from "axios";

const KEY = "AIzaSyD7k7azBgZaqszylMM7MrP0INPCwmYYIKU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
