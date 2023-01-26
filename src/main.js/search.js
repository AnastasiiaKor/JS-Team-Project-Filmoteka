import { getMoviesByKeyword } from './requests';
import { createGalleryMarkup } from './templates.js/gallery-markup';

const headerForm = document.querySelector('.search-form');
const searchResult = document.querySelector('.search-result');
const WARNING_CLEAR_DELAY = 3000;

async function searchMovies(event) {
  event.preventDefault();
  try {
    let serched = [];
    const value = event.target['search-film'].value;
    if (value) {
      serched = await getMoviesByKeyword({
        keyword: value,
        page: 1,
      });
    }
    if (serched?.results?.length) {
      createGalleryMarkup(serched.results);
      searchResult.innerHTML = '';
    } else if (value) {
      searchResult.innerHTML =
        'Search result not successful. Enter the correct movie name and try again.';
      setTimeout(() => {
        searchResult.innerHTML = '';
      }, WARNING_CLEAR_DELAY);
    }
  } catch (error) {
    throw new Error();
  }
}

headerForm.addEventListener('submit', searchMovies);
