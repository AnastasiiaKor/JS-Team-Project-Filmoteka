import { getMovieBYGenre } from './requests';
import { makeGallery } from './make-gallery';
/* import { gallery } from './templates.js/gallery-markup'; */
import { paginator } from './paginator';
/* import { addGallerySettings } from './templates.js/gallery-settigs'; */
const gallery = document.querySelector('.gallery');

let genreID = null;
const HREF =
  'https://anastasiiakor.github.io/JS-Team-Project-Filmoteka/library.html';

gallery.addEventListener('click', e => {
  e.preventDefault();
  if (!e.target.className.includes('genre-link')) return;
  e.stopImmediatePropagation();
  genreID = e.target.dataset.id;
  console.log(genreID);
  paginator.callback = searchByGenre;
  searchByGenre(1);
});

export async function searchByGenre(page = 1) {
  try {
    const data = await getMovieBYGenre(genreID, page);
    makeGallery(data.results);
    if (location.href === HREF) {
      const librWatchedBtnEl = document.querySelector('#watched');
      const librQueueBtnEl = document.querySelector('#queue');
      librWatchedBtnEl.classList.remove('btn-add__active');
      librWatchedBtnEl.removeAttribute('disabled');
      librQueueBtnEl.classList.remove('btn-add__active');
      librQueueBtnEl.removeAttribute('disabled');
    }
    paginator.currentPage = data.page;
    paginator.totalPages = data.total_pages < 500 ? data.total_pages : 500;
  } catch (error) {
    console.log(error);
  }
}

export const updateGenreId = (id) => {
  genreID = id;
  paginator.callback = searchByGenre;
}

/* export { searchByGenre }; */
