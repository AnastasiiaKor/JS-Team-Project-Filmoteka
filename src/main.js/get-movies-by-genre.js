import { getMovieBYGenre } from './requests';
import { makeGallery } from './make-gallery';
import { gallery } from './templates.js/gallery-markup';
import { paginator } from './paginator';
import { addGallerySettings } from './templates.js/gallery-settigs';

let genreID;

gallery.addEventListener('click', e => {
  e.preventDefault();
  if (!e.target.className.includes('genre-link')) return;
  e.stopImmediatePropagation();
  searchByGenre(e.target.dataset.id);
  paginator.callback = searchByGenre;
  searchByGenre(1);
});

const searchByGenre = async (id, page) => {
  try {
    const data = await getMovieBYGenre(id, page);
    makeGallery(data.results);
    addGallerySettings();
    paginator.currentPage = data.page;
    paginator.totalPages = data.total_pages < 500 ? data.total_pages : 500;
  } catch (error) {
    console.log(error);
  }
};

export { searchByGenre };
