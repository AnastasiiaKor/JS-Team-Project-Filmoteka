import { searchByGenre } from './get-movies-by-genre';
let filterCategories = document.querySelector('.filter__categories');
let options = document.querySelector('.filter__list');
let filterBtn;
let lastSearch;
function addFilter() {
  filterCategories = document.querySelector('.filter__categories');
  options = document.querySelector('.filter__list');
  filterBtn = document.querySelector('.filter__icon');
  filterBtn.addEventListener('click', openFilter);
}

function openFilter(e) {
  if (!e.target.classList.contains('filter__icon')) return;

  e.target.classList.toggle('active');

  e.target.classList.contains('active')
    ? filterCategories.classList.remove('is-hidden')
    : filterCategories.classList.add('is-hidden');

  filterCategories.classList.contains('is-hidden') &&
    options.classList.add('is-hidden');

  !filterCategories.classList.contains('is-hidden') &&
    filterCategories.querySelector('.active') &&
    options.classList.remove('is-hidden');

  filterCategories.addEventListener('click', genreFilter);
}

function genreFilter(e) {
  if (!e.target.classList.contains('filter__category')) return;

  e.target.classList.toggle('active');

  e.target.classList.contains('active')
    ? options.classList.remove('is-hidden')
    : options.classList.add('is-hidden');

  if (!e.target.classList.contains('active')) return;
  options.classList.remove('is-hidden');

  const genresList = JSON.parse(localStorage.getItem('genres'));
  const optionsMarkup = genresList
    .map(
      ({ id, name }) =>
        `<li class="filter__item"><button class="filter__option" type="button" data-id="${id}">${name}</button></li>`
    )
    .join('');
  options.innerHTML = optionsMarkup;
  options.addEventListener('click', showFilteredMovies);
}

function showFilteredMovies(e) {
  if (e.target.nodeName !== 'BUTTON') return;
  lastSearch = e.target.dataset.id;
  try {
    switchOptions(e);
    searchByGenre(lastSearch, 1);
  } catch (error) {}
}

function switchOptions(e) {
  const currentActive = document.querySelector('.filter__option.active');
  currentActive && currentActive.classList.remove('active');
  e.target.classList.add('active');
}

export { addFilter };
