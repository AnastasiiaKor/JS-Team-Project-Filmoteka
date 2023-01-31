import { getTrending } from './requests';
import { period, createSwitcherMarkup } from './templates.js/trending-switcher';
import { paginator } from './paginator';
import { makeGallery } from './make-gallery';

showTrending(1, period);

paginator.callback = showTrending;

async function showTrending(page = 1, timeWindow = period) {
  try {
    const data = await getTrending(page, timeWindow);
    makeGallery(data.results);
    
    paginator.currentPage = data.page;
    paginator.totalPages = data.total_pages;

    createSwitcherMarkup(showTrending);
  } catch (error) {
    console.log(error);
  }
}

export { showTrending };
