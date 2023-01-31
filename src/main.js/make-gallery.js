import { createGalleryMarkup } from './templates.js/gallery-markup';

export const makeGallery = movies => {
    const gallery = document.querySelector('.gallery');
    const markup = createGalleryMarkup(movies);
    gallery.innerHTML = markup;
    /* gallery.scrollIntoView(); */
    window.scrollTo(0, 0)
}

export const clearGallery = () => {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = "";
}