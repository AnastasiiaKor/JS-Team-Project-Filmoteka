import { getGenres } from './requests';

async function storeGenres() {
  try {
    const response = await getGenres();
    const genres = response.genres;
    localStorage.setItem('genres', JSON.stringify(genres));
  } catch (error) {
    console.log(error);
  }
}
storeGenres();
