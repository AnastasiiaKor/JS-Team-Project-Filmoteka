import { getMovieBYGenre } from './requests';
import { makeGallery } from './make-gallery';
/* import { gallery } from './templates.js/gallery-markup'; */
import { paginator } from './paginator';
/* import { addGallerySettings } from './templates.js/gallery-settigs'; */
const gallery = document.querySelector('.gallery');

let genreID = null;

gallery.addEventListener('click', e => {
  e.preventDefault();
  if (!e.target.className.includes('genre-link')) return;
  e.stopImmediatePropagation();
  genreID = e.target.dataset.id;
  paginator.callback = searchByGenre;
  searchByGenre(1);
});

async function searchByGenre(page = 1) {
  try {
    const data = await getMovieBYGenre(genreID, page);
    makeGallery(data.results);
/*     gallery.scrollIntoView(); */
    paginator.currentPage = data.page;
    paginator.totalPages = data.total_pages < 500 ? data.total_pages : 500;
  } catch (error) {
    console.log(error);
  }
}

export { searchByGenre };
