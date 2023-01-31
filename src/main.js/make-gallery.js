import { createGalleryMarkup } from './templates.js/gallery-markup';

export const makeGallery = movies => {
    const gallery = document.querySelector('.gallery');
    const markup = createGalleryMarkup(movies);
    gallery.innerHTML = markup;
    gallery.scrollIntoView();
}