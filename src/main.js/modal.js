import { makeModal } from './requests';

const modal = document.querySelector('.js-modal');

makeModal().then(function createMarkup({ results }) {
  const markup = results.map(
    ({
      id,
      backdrop_path,
      overview,
      title,
      genre_ids,
      vote_average,
      vote_count,
      original_title,
      popularity,
      video,
    }) => {
      return `
    <button type="button" class="button__close" data-modal-close>
      <svg width="30" height="30">
        <use href="./images/icon-close.svg#close"></use>
      </svg>
    </button>
    <a class="modal__wrapper" href="${id}">
      <div class="film__image">
        <img class="image" src="https://image.tmdb.org/t/p/w500${backdrop_path}" loading="lazy" alt="${title} poster" />
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
            <tr>
              <td class="film__item">Genre</td>
              <td class="film__details">${genre_ids}</td>
            </tr>
          </tbody>
        </table>
        <button type="button" class="button film__button--trailer">
          ${video} Check, if we've got a trailer for you
        </button>
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
      `;
    }
  );
  modal.insertAdjacentHTML('beforeend', markup.join(''));
});
