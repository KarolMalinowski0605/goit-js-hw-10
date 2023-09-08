

import axios from 'axios';


axios.defaults.headers.common['x-api-key'] = "live_iGSvPnRg8pvnoWaV96pD0qkOsNoyBuZMZKzZwbBPoVdtkf8QV2suGCLls79FwX1C";
const apiUrl = "https://api.thecatapi.com/v1";

export function fetchBreeds() {
    return axios
      .get(`${apiUrl}/breeds`)
      .then((response) => response.data)
      .catch((err) => {
        showError("Failed to fetch breeds.");
        throw err;
      });
  }
  
 
 export function fetchCatByBreed(breedId) {
    return axios
      .get(`${apiUrl}/images/search?breed_ids=${breedId}`)
      .then((response) => response.data)
      .catch((err) => {
        showError("Failed to fetch cat information.");
        throw err;
      });
  }