import { getTrending } from './requests';
import { createGalleryMarkup } from './templates.js/gallery-markup';
import { paginator } from './paginator';

const gallery = document.querySelector('.gallery');
/* const paginationBlock = document.querySelector('.pagination'); */

paginator.callback = buildGallery;
buildGallery();

/* paginationBlock &&
  paginationBlock.addEventListener('click', () => {
    gallery.scrollIntoView();
  }); */

async function buildGallery(page = 1) {
  try {
    const data = await getTrending(page);
    const markup = createGalleryMarkup(data.results);
    gallery.innerHTML = markup;
    gallery.scrollIntoView();
    paginator.currentPage = data.page;
    paginator.totalPages = data.total_pages;
  } catch (error) {
    console.log(error);
  }
}
