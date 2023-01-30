import { getTrending } from './requests';
import { addSearchByGenre } from './get-movies-by-genre';
import { gallery, createGalleryMarkup } from './templates.js/gallery-markup';
import { period, createSwitcherMarkup } from './templates.js/trending-switcher';
import { paginator } from './paginator';

showTrending(1, period);

paginator.callback = showTrending;

async function showTrending(page = 1, timeWindow = period) {
  try {
    const data = await getTrending(page, timeWindow);
    const markup = await createGalleryMarkup(data.results);

    gallery.innerHTML = markup;
    paginator.currentPage = data.page;
    paginator.totalPages = data.total_pages;

    createSwitcherMarkup(showTrending);
    addSearchByGenre();
  } catch (error) {
    console.log(error);
  }
}

export { showTrending };
