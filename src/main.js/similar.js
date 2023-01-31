import { getSimilar } from './requests';
import { makeGallery } from './make-gallery';
import { paginator } from './paginator';
let id;

export const loadSimilar = reqID => {
  id = reqID;
  paginator.callback = fetchSimilar;
  fetchSimilar(1);
};

const fetchSimilar = async page => {
  try {
    const data = await getSimilar(id, page);
    makeGallery(data.results);
    paginator.currentPage = data.page;
    paginator.totalPages = data.total_pages < 500 ? data.total_pages : 500;
  } catch (error) {
    console.log(error);
  }
};
