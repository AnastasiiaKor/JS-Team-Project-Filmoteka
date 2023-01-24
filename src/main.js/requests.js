import { instance, KEY } from './instance';

//MAIN
async function getTrending(page) {
  const response = await instance(
    `trending/movie/day?api_key=${KEY}&page=${page}&language=en-US`
  );
  return response.data;
}
//SEARCH
async function getMoviesByKeyword(keyword, page) {
  const response = await instance(
    `/search/movie?api_key=${KEY}&page=${2}&query=${keyword}&language=en-US`
  );
  return response.data;
}
//DETAILS
async function getMovieById(id) {
  const response = await instance(
    `movie/${id}?api_key=${KEY}&append_to_response=videos&language=en-US`
  );
  return response.data;
}
// RECOMMENDATIONS
async function getRecommended(id, page) {
  const response = await instance(
    `movie/${id}/recommendations?api_key=${KEY}&page=${page}&language=en-US`
  );
  return response.data;
}
/// GENRES
async function getGenres() {
  const response = await instance(
    `genre/movie/list?api_key=${KEY}&language=en-US`
  );
  return response.data;
}

////////////
async function show() {
  const data = await getGenres();
  console.log(data);
}
show();

// 'https://www.youtube.com/watch?v=BdJKm16Co6M' -- ссылка на видео

//-------------------------------------
//https://image.tmdb.org/t/p/w300/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg
// "secure_base_url": "https://image.tmdb.org/t/p/",
// "backdrop_sizes": [
//   "w300",
//   "w780",
//   "w1280",
//   "original"
