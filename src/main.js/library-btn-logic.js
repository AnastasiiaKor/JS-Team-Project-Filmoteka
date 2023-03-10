import { makeGallery, clearGallery } from './make-gallery';
import { paginator } from './paginator';

const divClassEl = document.querySelector('.empty_library_bcg_img');
const librWatchedBtnEl = document.querySelector('#watched');
const librQueueBtnEl = document.querySelector('#queue');
const userName = localStorage.getItem('user');
let defaultEvent = new Event('click');

librWatchedBtnEl.addEventListener('click', onWatchedClick);
librQueueBtnEl.addEventListener('click', onQueueClick);

function onWatchedClick(e) {
  localStorage.removeItem('saved_page');
  localStorage.setItem('saved_page', 'watched');
  changeBtnState(e.target.id);
  renderMovies(e.target.id);
}

function onQueueClick(e) {
  localStorage.removeItem('saved_page');
  localStorage.setItem('saved_page', 'queue');
  changeBtnState(e.target.id);
  renderMovies(e.target.id);
}

function renderMovies(e) {
  paginator.currentPage = 0;
  let savedData = localStorage.getItem(e);

  if (savedData && JSON.parse(savedData).length) {
    let savedData = localStorage.getItem(e);
    let parsedData = JSON.parse(savedData);
    makeGallery(parsedData);
    divClassEl.style.display = 'none';
  } else {
    clearGallery();
    divClassEl.style.display = 'block';
  }
}

renderMovies('queue');
document.addEventListener('libraryChange', e => {
  const section = e.detail.section;
  changeBtnState(section);
  renderMovies(section);
});

export function changeBtnState(section) {
  switch (section) {
    case 'watched':
      librQueueBtnEl.classList.remove('btn-add__active');
      librQueueBtnEl.removeAttribute('disabled');
      librWatchedBtnEl.classList.add('btn-add__active');
      librWatchedBtnEl.setAttribute('disabled', true);
      break;
    case 'queue':
      librWatchedBtnEl.classList.remove('btn-add__active');
      librWatchedBtnEl.removeAttribute('disabled');
      librQueueBtnEl.classList.add('btn-add__active');
      librQueueBtnEl.setAttribute('disabled', true);
      break;
    default:
      librWatchedBtnEl.classList.remove('btn-add__active');
      librWatchedBtnEl.removeAttribute('disabled');
      librQueueBtnEl.classList.remove('btn-add__active');
      librQueueBtnEl.removeAttribute('disabled');
  }
}

// ???????????????????? ??????????????????????
// ???????????????????? ?????????????????? ???????????????? ????
//???????????????? ???? ?? ??-?????? onClick

checkSaveBtn();
function checkSaveBtn() {
  if (localStorage.getItem('saved_page') === 'watched') {
    librWatchedBtnEl.dispatchEvent(defaultEvent);
    return;
  } else if (localStorage.getItem('saved_page') === 'queue') {
    librQueueBtnEl.dispatchEvent(defaultEvent);
    return;
  }
}
