import { getTrending } from './requests';

const gallery = document.querySelector('.gallery');
let page = 1;

buildGallery();

async function buildGallery() {
  try {
    const data = await getTrending(page);
    createMarkup(data);
  } catch (error) {
    console.log(error);
  }
}

function createMarkup({ results }) {
  const markup = results
    .map(({ id, poster_path, title, genre_ids, release_date }) => {
      const date = new Date(release_date).getFullYear();
      let separator = '';
      if (genre_ids && date) separator = ' | ';
      return `<li class="gallery__item">
                <a class="gallery__link" href="${id}">
                    <div class='gallery__event-wrapper'>
                        <img class="gallery__poster" src="https://image.tmdb.org/t/p/w500${poster_path}" loading="lazy" />
                        <div class="gallery__description">
                            <p class="gallery__movie-title">${title}</p>
                            <p class="gallery__movie-meta">
                            ${genre_ids}${separator}${date}
                            </p>
                        </div>
                    </div>
                </a>
             </li>   
            `;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
}

function getMovieById(callback) {
  gallery.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.nodeName !== 'A') return;
    return callback(e.target.getAttribute('href'));
  });
}

export { getMovieById };

/*
To get Movie by ID:

import { getMovieById } from './gallery';

getMovieById(callback);

function callback(id) {
  ...
}

*/
