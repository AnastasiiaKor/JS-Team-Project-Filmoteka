import { getTrending } from './requests';
import { createGalleryMarkup } from './templates.js/gallery-markup';
/* import { pagination } from './pagination'; */
import { Paginator } from './paginator';
const paginatorContainer = document.querySelector('.pagination');

const gallery = document.querySelector('.gallery');
// const p = new Paginator(buildGallery, paginatorContainer);

buildGallery();
// .then(data => pagination(buildGallery, data));

async function buildGallery(page = 1) {
  try {
    const data = await getTrending(page);
    const markup = createGalleryMarkup(data.results);
    gallery.innerHTML = markup;
    // paginator.currentPage = data.page;
    // paginator.totalPages = data.total_pages;
  } catch (error) {
    console.log(error);
  }
}
