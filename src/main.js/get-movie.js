import { getMovieById } from './requests';

async function getMovie(e) {
  if (e.target.nodeName !== 'A') return;

  try {
    return await getMovieById(e.target.getAttribute('href'));
  } catch (error) {
    console.log(error.message);
  }
}

export { getMovie };
