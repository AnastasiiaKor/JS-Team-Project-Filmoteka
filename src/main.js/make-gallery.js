import { createGalleryMarkup, gallery } from './templates.js/gallery-markup';

export const makeGallery = movies => {
  const markup = createGalleryMarkup(movies);
  gallery.innerHTML = markup;
  gallery.scrollIntoView();
};

export const clearGallery = () => {
  gallery.innerHTML = '';
};
