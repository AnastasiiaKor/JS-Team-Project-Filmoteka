import { createGalleryMarkup } from './templates.js/gallery-markup';
const gallery = document.querySelector('.gallery');

export const makeGallery = movies => {
  const markup = createGalleryMarkup(movies);
  gallery.innerHTML = markup;
  scrollTo(0, 0);
};

export const clearGallery = () => {
  gallery.innerHTML = '';
};
