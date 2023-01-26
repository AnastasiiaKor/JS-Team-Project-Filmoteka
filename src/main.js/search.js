import { getMoviesByKeyword } from './requests';
import { createGalleryMarkup } from './templates.js/gallery-markup';

const headerForm = document.querySelector('.search-form');
const searchResult = document.querySelector('.search-result');
const gallery = document.querySelector('.gallery');
const WARNING_CLEAR_DELAY = 3000;

async function searchMovies(event) {
  event.preventDefault();
  try {
    const value = event.target['search-film'].value;
    let serched = {};
    if (value) {
      serched = await getMoviesByKeyword({
        keyword: value,
        page: 1,
      });
    } else {
      searchResult.innerHTML =
        'Movie name  must not be empty. Please, enter movie name to search.';
      clearInfo();
    }
    if (serched?.results?.length) {
      const markup = createGalleryMarkup(serched.results);
      searchResult.innerHTML = '';
      gallery.innerHTML = markup;
    } else if (value) {
      searchResult.innerHTML =
        'Search result not successful. Enter the correct movie name and try again.';
      clearInfo();
    }
  } catch (error) {
    throw new Error();
  }
}

headerForm.addEventListener('submit', searchMovies);

const clearInfo = () => {
  setTimeout(() => {
    searchResult.innerHTML = '';
  }, WARNING_CLEAR_DELAY);
};
