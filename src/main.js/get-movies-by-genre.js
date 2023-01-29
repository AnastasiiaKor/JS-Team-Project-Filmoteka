import { getMovieBYGenre } from './requests';
import { showTrending } from './trending';
import { createGalleryMarkup } from './templates.js/gallery-markup';
import { paginator } from './paginator';

const gallery = document.querySelector('.gallery');

addSearchByGenre();
paginator.callback = addSearchByGenre;

async function addSearchByGenre(page = 1) {
  gallery.addEventListener('click', async e => {
    if (!e.target.className.includes('genre-link')) return;
    if (e.target.dataset.id === 'trending') showTrending();
    try {
      const data = await getMovieBYGenre(e.target.dataset.id, page);
      const markup = createGalleryMarkup(data.results);
      gallery.innerHTML = markup;
      gallery.scrollIntoView();
      paginator.currentPage = data.page;
      paginator.totalPages = data.total_pages;
    } catch (error) {
      console.log(error);
    }
  });
}

export { addSearchByGenre };
