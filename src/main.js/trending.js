import { getTrending } from './requests';
import { createGalleryMarkup } from './templates.js/gallery-markup';
// import { pagination } from './pagination';

const gallery = document.querySelector('.gallery');

buildGallery();
// .then(data => pagination(buildGallery, data));

async function buildGallery(page = 1) {
  try {
    const data = await getTrending(page);
    const markup = createGalleryMarkup(data.results);
    gallery.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    console.log(error);
  }
}
