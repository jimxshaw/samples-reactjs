import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 3c8209efcef6b7a184e8f40b3ba0df5c9b9c749ba384c9cdd45e542ec7e8ef82"
  }
});
