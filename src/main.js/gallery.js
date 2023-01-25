import { getTrending } from './requests';

const gallery = document.querySelector('.gallery');

buildGallery();

async function buildGallery() {
  try {
    console.log('object');
    const data = await getTrending((page = 1));
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
                    <img class="gallery__poster" src="https://image.tmdb.org/t/p/w500${poster_path}" loading="lazy" />
                    <div class="gallery__description">
                        <p class="gallery__movie-title">${title}</p>
                        <p class="gallery__movie-meta">
                        ${genre_ids}${separator}${date}
                        </p>
                    </div>
                </a>
            </li>`;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
}
