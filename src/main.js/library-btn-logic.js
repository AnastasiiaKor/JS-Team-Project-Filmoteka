import { createGalleryMarkup } from './templates.js/gallery-markup';
// import { getGenresById } from './get-genres';
// import { buildGallery } from './trending';
// import { getTrending } from './requests';
// import { paginator } from './paginator';

const divClassEl = document.querySelector('.empty_library_bcg_img');
const librWatchedBtnEl = document.querySelector('#watched');
const librQueueBtnEl = document.querySelector('#queue');
const galleryEl = document.querySelector('.gallery');
const userName = localStorage.getItem('user');
const savedQueue = localStorage.getItem(`${userName}_queue`);

if (savedQueue && JSON.parse(savedQueue).length) {
  let savedData = localStorage.getItem(`${userName}_queue`);
  let parsedData = JSON.parse(savedData);
  galleryEl.innerHTML = createGalleryMarkup(parsedData);
  divClassEl.style.display = 'none';
}

librWatchedBtnEl.addEventListener('click', onWatchedClick);
librQueueBtnEl.addEventListener('click', onQueueClick);

function onWatchedClick(e) {
  librQueueBtnEl.classList.remove('btn-add__active');
  librQueueBtnEl.removeAttribute('disabled');
  librWatchedBtnEl.classList.add('btn-add__active');
  librWatchedBtnEl.setAttribute('disabled', true);

  renderMovies(e.target.id);
}

function onQueueClick(e) {
  librWatchedBtnEl.classList.remove('btn-add__active');
  librWatchedBtnEl.removeAttribute('disabled');
  librQueueBtnEl.classList.add('btn-add__active');
  librQueueBtnEl.setAttribute('disabled', true);

  renderMovies(e.target.id);
}

function renderMovies(e) {
  let savedData = localStorage.getItem(e);
  
  if (savedData && JSON.parse(savedData).length) {
    let savedData = localStorage.getItem(e);
    let parsedData = JSON.parse(savedData);
    galleryEl.innerHTML = createGalleryMarkup(parsedData);
    divClassEl.style.display = 'none';
    return;
  }
  galleryEl.innerHTML = '';
  divClassEl.style.display = 'block';
  alert(`Your queue library is empty`);
  return;
}

renderMovies('queue');

// подключить билдГаллери
// подключить создатель разметки ок
//добавить их в ф-цию onClick
