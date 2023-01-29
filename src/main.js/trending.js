import { getTrending } from './requests';
import { addSearchByGenre } from './get-movies-by-genre';
import { createGalleryMarkup } from './templates.js/gallery-markup';
import { paginator } from './paginator';

const gallery = document.querySelector('.gallery');

paginator.callback = showTrending;
showTrending();

async function showTrending(page = 1) {
  try {
    const data = await getTrending(page);
    const markup = createGalleryMarkup(data.results);
    gallery.scrollIntoView();
    gallery.innerHTML = markup;
    paginator.currentPage = data.page;
    paginator.totalPages = data.total_pages;
    addSearchByGenre();
  } catch (error) {
    console.log(error);
  }
}

export { showTrending };
