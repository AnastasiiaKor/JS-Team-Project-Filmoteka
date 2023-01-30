import { getTrending } from './requests';
import { addSearchByGenre } from './get-movies-by-genre';
import { createGalleryMarkup } from './templates.js/gallery-markup';
import { createSwitcherMarkup } from './templates.js/trending-switcher';
import { paginator } from './paginator';

const gallery = document.querySelector('.gallery');

showTrending().then(data => createSwitcherMarkup(showTrending));
addSearchByGenre();

paginator.callback = showTrending;

async function showTrending(timeWindow = 'day', page = 1) {
  try {
    const data = await getTrending(timeWindow, page);
    const markup = await createGalleryMarkup(data.results);

    gallery.innerHTML = markup;
    paginator.currentPage = data.page;
    paginator.totalPages = data.total_pages;
  } catch (error) {
    console.log(error);
  }
}

export { showTrending, gallery };
