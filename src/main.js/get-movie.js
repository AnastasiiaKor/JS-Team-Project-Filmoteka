import { getMovieById } from './requests';

async function getMovie(collection) {
  collection.addEventListener('click', async e => {
    e.preventDefault();

    if (e.target.nodeName !== 'A') return;

    try {
      return await getMovieById(e.target.getAttribute('href'));
    } catch (error) {
      console.log(error.message);
    }
  });
}

export { getMovie };
