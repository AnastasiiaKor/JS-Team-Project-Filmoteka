import { getMovieBYGenre } from './requests';
import { showTrending } from './trending';
import { createGalleryMarkup } from './templates.js/gallery-markup';
import { paginator } from './paginator';

const gallery = document.querySelector('.gallery');
let genreID;

addSearchByGenre();


const searchByGenre = async (page) => {
  try {
    const data = await getMovieBYGenre(genreID, page);
    const markup = createGalleryMarkup(data.results);
    gallery.innerHTML = markup;
    gallery.scrollIntoView();
    paginator.currentPage = data.page;
    paginator.totalPages = data.total_pages < 500 ? data.total_pages : 500;
  } catch (error) {
    console.log(error);
  }
}

function addSearchByGenre(page = 1) {
  gallery.addEventListener('click', async e => {
    e.preventDefault();
    if (!e.target.className.includes('genre-link')) return;
    e.stopImmediatePropagation();
    genreID = e.target.dataset.id;
    paginator.callback = searchByGenre;
    searchByGenre(page)
    
  });
}

export { addSearchByGenre };
