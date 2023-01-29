import { getMovie } from './get-movie';
import { getMoviesByKeyword } from './requests';
import { createGalleryMarkup } from './templates.js/gallery-markup';
import { paginator } from './paginator';
import { LoadSpinner } from './loader';

const loadSpinnerBtn = new LoadSpinner({ selector: '[data-action="loading"]' });
const headerForm = document.querySelector('.search-form');
const searchResult = document.querySelector('.search-result');
const gallery = document.querySelector('.gallery');
const WARNING_CLEAR_DELAY = 3000;
let query = '';
const searchMore = n => {
  getMovies(query, n);
};
const getMovies = async (query, page) => {
  let searched = await getMoviesByKeyword({
    keyword: query,
    page,
  });
  if (searched?.results?.length) {
    const markup = createGalleryMarkup(searched.results);
    searchResult.textContent = '';
    gallery.innerHTML = markup;
    gallery.scrollIntoView();
    paginator.callback = searchMore;
    paginator.currentPage = searched.page;
    paginator.totalPages = searched.total_pages;
  } else {
    searchResult.textContent =
      'Search result not successful. Enter the correct movie name and try again.';
    clearInfo();
  }
  loadSpinnerBtn.enable();
};

/* async function searchMovies(event) {
  event.preventDefault();
  try {
    const value = event.target['search-film'].value;
    let serched = {};
    if (value) {
      getMovies(value, 1);
      serched = await getMoviesByKeyword({
        keyword: value,
        page: 1,
      });
    } else {
      searchResult.textContent = 'Movie name must not be empty. Please, enter movie name to search.';
      clearInfo();
    }
    if (serched?.results?.length) {
      console.log(serched);
      const markup = createGalleryMarkup(serched.results);
      searchResult.innerHTML = '';
      gallery.innerHTML = markup;
    } else if (value) {
      searchResult.innerHTML =
        'Search result not successful. Enter the correct movie name and try again.';
      clearInfo();
    }
  } catch (error) {
    console.log(error);
  }
} */

const onSearch = event => {
  event.preventDefault();
  loadSpinnerBtn.disable();
  const value = event.target['search-film'].value.trim();
  if (value) {
    query = value;
    getMovies(query, 1);
  } else {
    searchResult.textContent =
      'Movie name must not be empty. Please, enter movie name to search.';
    clearInfo();
  }
};

headerForm.addEventListener('submit', onSearch);

const clearInfo = () => {
  setTimeout(() => {
    searchResult.textContent = '';
  }, WARNING_CLEAR_DELAY);
};
