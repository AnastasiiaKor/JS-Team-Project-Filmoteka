// import { getGenresById } from '../get-genres';

let modalDetails = document.querySelector('.js-modal');

function createModalMarkup(movie) {
  const {
    id,
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    original_title,
    genres,
    video,
    overview,
  } = movie;
  const trailerButton = video
    ? `<button type="button" class="button film__button--trailer">
      Watch trailer
    </button>`
    : '';
  console.log(movie);
  const genresList = genres.map(genre => genre.name).join(', ');

  const genre =
    genres.length !== 0
      ? `<tr>
        <td class="film__item">Genre</td>
        <td class="film__details">${genresList}</td>
      </tr>`
      : '';
  const markup = `
  <div class="modal__backdrop">
    <div class="modal">
      <button type="button" class="button__close">
        <svg width="30" height="30">
          <use href="icon-close.svg#close"></use>
        </svg>
      </button>
      <a class="modal__wrapper" href="${id}">
        <div class="film__image">
          <img
            class="image"
            src="https://image.tmdb.org/t/p/w500${poster_path}"
            loading="lazy"
            alt="${title} poster"
          />
        </div>
        <div class="film__info">
          <h2 class="film__title upper">${title}</h2>
          <table>
            <thead>
              <tr>
                <td class="film__item">Vote / Votes</td>
                <td class="film__details">
                  <span class="film__rating">${vote_average} </span> /
                  <span class="film__votes-number">${vote_count} </span>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="film__item">Popularity</td>
                <td class="film__details">${popularity}</td>
              </tr>
              <tr>
                <td class="film__item">Original Title</td>
                <td class="film__details upper">${original_title}</td>
              </tr>
              ${genre}
            </tbody>
          </table>
          ${trailerButton}
          <div>
            <h3 class="film__about--title upper">About</h3>
            <p class="film__about--text">${overview}</p>
          </div>
          <div class="film__button--wrapper">
            <button type="button" class="button film__button upper">
              Add to watched
            </button>
            <button type="button" class="button film__button upper">
              Add to queue
            </button>
          </div>
        </div>
      </a>
    </div>
  </div>
      `;
  modalDetails.innerHTML = markup;
}

export { createModalMarkup };
