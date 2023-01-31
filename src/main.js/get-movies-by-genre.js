import { getMovieBYGenre } from './requests';
import { makeGallery } from './make-gallery';
import { paginator } from './paginator';

let genreID;
const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', e => {
  e.preventDefault();
  if (!e.target.className.includes('genre-link')) return;
  e.stopImmediatePropagation();
  genreID = e.target.dataset.id;
  paginator.callback = searchByGenre;
  searchByGenre(1);
});


const searchByGenre = async page => {
  try {
    const data = await getMovieBYGenre(genreID, page);
    makeGallery(data.results);

    paginator.currentPage = data.page;
    paginator.totalPages = data.total_pages < 500 ? data.total_pages : 500;
  } catch (error) {
    console.log(error);
  }
};
