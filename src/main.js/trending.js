import { getTrending } from './requests';
import { period, createSwitcherMarkup } from './templates.js/trending-switcher';
import { paginator } from './paginator';
import { makeGallery } from './make-gallery';


showTrending(1);

export const setTrendingCallback = () => {
  paginator.callback = showTrending;
}

export async function showTrending(page = 1) {
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

setTrendingCallback();