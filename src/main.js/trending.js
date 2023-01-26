import { getTrending } from './requests';
import { createGalleryMarkup } from './templates.js/gallery-markup';

const gallery = document.querySelector('.gallery');
let page = 1;

buildGallery();

async function buildGallery() {
  try {
    const data = await getTrending(page);
    createGalleryMarkup(data.results);
  } catch (error) {
    console.log(error);
  }
}
