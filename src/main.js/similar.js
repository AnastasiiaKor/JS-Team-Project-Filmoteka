import { getSimilar } from './requests';
import { closeModal } from './modal';
import { gallery, createGalleryMarkup } from './templates.js/gallery-markup';
/* import { paginator } from './paginator'; */
let id;
function seeSimilar(modal) {
  const btnRecommended = document.querySelector('.film__button--recommended');
  btnRecommended.addEventListener('click', async e => {
    closeModal();
    id = e.target.dataset.id;
    let page = 1;
/*     paginator.callback = fetchSimilar; */
    fetchSimilar(page);
  });
}

const fetchSimilar = async page => {
  try {
    const data = await getSimilar(id, page);
    const markup = createGalleryMarkup(data.results);
    gallery.innerHTML = markup;
    gallery.scrollIntoView();
/*     paginator.currentPage = data.page;
    paginator.totalPages = data.total_pages < 500 ? data.total_pages : 500; */
  } catch (error) {
    console.log(error);
  }
};
export { seeSimilar };
