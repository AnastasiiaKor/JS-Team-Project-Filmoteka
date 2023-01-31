import { getMoviesByKeyword } from './requests';
import { paginator } from './paginator';
import { LoadSpinner } from './loader';
import { makeGallery } from './make-gallery';

const loadSpinnerBtn = new LoadSpinner({ selector: '[data-action="loading"]' });
const headerForm = document.querySelector('.search-form');
const searchResult = document.querySelector('.search-result');
const WARNING_CLEAR_DELAY = 3000;
let lastQuery = '';
const searchMore = n => {
  getMovies(lastQuery, n);
};
const getMovies = async (query, page) => {
  loadSpinnerBtn.enable();
  let searched = await getMoviesByKeyword({
    keyword: query,
    page,
  });
  if (searched?.results?.length) {
    makeGallery(searched.results);
    searchResult.textContent = '';
    lastQuery = query;
    paginator.callback = searchMore;
    paginator.currentPage = searched.page;
    paginator.totalPages = searched.total_pages;
  } else {
    searchResult.textContent =
      'Search result not successful. Enter the correct movie name and try again.';
    clearInfo();
  }
  loadSpinnerBtn.disable();
};


const onSearch = event => {
  event.preventDefault();

  const value = event.target['search-film'].value.trim();
  if (value) {
    getMovies(value, 1);
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
