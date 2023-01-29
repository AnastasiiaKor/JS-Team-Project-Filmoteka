import { createGalleryMarkup } from './templates.js/gallery-markup';
// import { getGenresById } from './get-genres';
// import { buildGallery } from './trending';
// import { getTrending } from './requests';
// import { paginator } from './paginator';

const divClassEl = document.querySelector('.empty_library_bcg_img');
const librWatchedBtnEl = document.querySelector('#watched');
const librQueueBtnEl = document.querySelector('#queue');
const galleryEl = document.querySelector('.gallery');

librWatchedBtnEl.addEventListener('click', onWatchedClick);
librQueueBtnEl.addEventListener('click', onQueueClick);

function onWatchedClick() {
  if (localStorage.getItem('watched')) {
    let savedData = localStorage.getItem('watched');
    let parsedData = JSON.parse(savedData);
    let arr = parsedData;
    const markup = createGalleryMarkup(arr);
    galleryEl.innerHTML = markup;
    console.dir(divClassEl);
    divClassEl.style.display = 'none';

    return;
  } else alert(`Your watched library is empty`);
  galleryEl.innerHTML = '';
  divClassEl.style.display = 'block';
  return;
}

function onQueueClick() {
  if (localStorage.getItem('queue')) {
    let savedData = localStorage.getItem('queue');
    let parsedData = JSON.parse(savedData);
    let arr = parsedData;
    console.log(arr);
    const markup = createGalleryMarkup(arr);
    galleryEl.innerHTML = markup;
    divClassEl.style.display = 'none';
    return;
  } else alert(`Your queue library is empty`);
  galleryEl.innerHTML = '';
  divClassEl.style.display = 'block';
  return;
}

// подключить билдГаллери
// подключить создатель разметки ок
//добавить их в ф-цию onClick
