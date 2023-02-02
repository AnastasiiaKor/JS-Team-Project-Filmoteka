import { getTrending } from './requests';
import { period, createSwitcherMarkup } from './templates.js/trending-switcher';
import { paginator } from './paginator';
import { makeGallery } from './make-gallery';
/* import { addGallerySettings } from './templates.js/gallery-settigs'; */

showTrending(1);

paginator.callback = showTrending;

async function showTrending(page = 1) {
  try {
    const data = await getTrending(page, period);
    makeGallery(data.results);
/*     addGallerySettings(); */
    paginator.currentPage = data.page;
    paginator.totalPages = data.total_pages;
  } catch (error) {
    console.log(error);
  }
}

export { showTrending };
