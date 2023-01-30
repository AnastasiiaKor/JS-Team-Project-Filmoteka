import { getTrending } from './requests';
import { addSearchByGenre } from './get-movies-by-genre';
import { createGalleryMarkup } from './templates.js/gallery-markup';
import { period, createSwitcherMarkup } from './templates.js/trending-switcher';
import { paginator } from './paginator';

const gallery = document.querySelector('.gallery');
showTrending(1, period).then(data => createSwitcherMarkup(showTrending));
addSearchByGenre();

paginator.callback = showTrending;

async function showTrending(page = 1, timeWindow = period) {
  try {
    const data = await getTrending(page, timeWindow);
    const markup = await createGalleryMarkup(data.results);

    gallery.innerHTML = markup;
    paginator.currentPage = data.page;
    paginator.totalPages = data.total_pages;
  } catch (error) {
    console.log(error);
  }
}

export { showTrending, gallery };
