import { makeGallery } from './make-gallery';
import { paginator } from './paginator';

const divClassEl = document.querySelector('.empty_library_bcg_img');
const librWatchedBtnEl = document.querySelector('#watched');
const librQueueBtnEl = document.querySelector('#queue');
const userName = localStorage.getItem('user');



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

export function renderMovies(e) {
  paginator.currentPage = 0;
  let savedData = localStorage.getItem(e);

  if (savedData && JSON.parse(savedData).length) {
    let savedData = localStorage.getItem(e);
    let parsedData = JSON.parse(savedData);
    makeGallery(parsedData);
    divClassEl.style.display = 'none';
    return;
  }
  galleryEl.innerHTML = '';
  divClassEl.style.display = 'block';
  return;
}

renderMovies('queue');

// подключить билдГаллери
// подключить создатель разметки ок
//добавить их в ф-цию onClick
