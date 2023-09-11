
import axios from 'axios';



import { fetchBreeds, fetchCatByBreed, } from './cat-api.js';

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');




function showError(message) {
  error.textContent = message;
  error.style.display = "block";
}


function hideError() {
  error.style.display = "none";
}


function displayCatInfo(cat) {
  catInfo.innerHTML = `
    <img src="${cat[0].url}" alt="Cat Image" />
    <div class="cat-wrapper">
    <h2>${cat[0].breeds[0].name}</h2>
    <p> ${cat[0].breeds[0].description}</p>
    <p><strong>Temperament:</strong> ${cat[0].breeds[0].temperament}</p>
    </div>
  `;
  
}


fetchBreeds()
  .then((breeds) => {
    hideError();
    loader.style.display = "none";

    
    breeds.forEach((breed) => {
      const option = document.createElement("option");
      option.value = breed.id;
      option.textContent = breed.name;
      breedSelect.appendChild(option);
    });
    

   
    breedSelect.addEventListener("change", () => {
      const selectedBreedId = breedSelect.value;
      loader.style.display = "block";
      catInfo.innerHTML = "";

      fetchCatByBreed(selectedBreedId)
        .then(displayCatInfo)
        .catch((err) => console.error(err))
        .finally(() => {
          loader.style.display = "none";
        });
       
    });
    new SlimSelect({
      select: '.breed-select',
      
      
    })
    
    
    
  })
  .catch((err) => console.error(err));
  
  
  





















































