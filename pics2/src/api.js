import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID KU7cRum0TjYd6okYn-ndXZH_R_sWpQN9Z6Z7rCBmCMY'
    },
    params: {
      query: term,
    }
  });

  return response.data.results;
};

export default searchImages;