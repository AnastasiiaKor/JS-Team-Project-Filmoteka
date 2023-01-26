import { getMoviesByKeyword } from './requests';
import { createGalleryMarkup } from './templates.js/gallery-markup';

const headerForm = document.querySelector('.search-form');
const seachInput = document.querySelector('.search-form__input');
const searchResult = document.querySelector('.search-result');

async function searchMovies(event) {
  event.preventDefault();
  try {
    const serched = await getMoviesByKeyword({
      keyword: seachInput.value,
      page: 1,
    });
    if (serched?.results?.length) {
      createGalleryMarkup(serched.results);
      searchResult.innerHTML = '';
    } else {
      searchResult.innerHTML =
        'Search result not successful. Enter the correct movie name and try again.';
    }
  } catch (error) {
    throw new Error();
  }
}

headerForm.addEventListener('submit', searchMovies);
