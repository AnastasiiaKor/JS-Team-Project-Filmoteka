import { getMovieById } from './requests';

export const getMovieData = async (id) => {
  try {
    return await getMovieById(id);
  } catch (error) {
    console.log(error.message);
  }
}
