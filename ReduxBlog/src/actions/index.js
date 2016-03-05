// The purpose of this action creator is going to reach out 
// and grab our list of blog posts from the api. 
import axios from "axios";

// Define our action type here.
export const FETCH_POSTS = "FETCH_POSTS";

// This is the api url and key.
const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=randomsampleapikey777";

export function fetchPosts() {
  // Axios reaches out to the api, makes the request and return the request 
  // as the payload from our action. Redux promise to unwrap the promise and 
  // the data will flow through our reducers. 
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}







