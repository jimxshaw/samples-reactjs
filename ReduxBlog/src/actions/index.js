// The purpose of this action creator is going to reach out 
// and grab our list of blog posts from the api. 
import axios from "axios";

// Define our action types here.
export const FETCH_POSTS = "FETCH_POSTS";
export const CREATE_POST = "CREATE_POST";

// This is the sample web api url and key.
const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=randomsampleapikey777";

// Action creator 1
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

// Action creator 2
// This action creator will make a new blog post for us. We're going to assume 
// that it will be called with an object containing the title, categories 
// and content fields. We'll just take that object in as an argument called props.
// After props get passed in, createPost function will post a new blog post to 
// the specified sample web api end point. 
export function createPost(props) {
  // Since this is a post method, we'll use .post instead of our usual .get. Our 
  // sample web api .post end point argument will be the same as .get but takes 
  // in props.
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

  return {
    type: CREATE_POST,
    payload: request
  };
}





