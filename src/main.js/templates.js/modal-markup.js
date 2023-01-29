// import { getGenresById } from '../get-genres';

let modal = document.querySelector('.js-modal');

function createModalMarkup(movie) {
  const {
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    original_title,
    genres,
    videos,
    overview,
  } = movie;

  const trailerButton =
    videos.results.length !== 0
      ? `<li><button type="button" class="button js-film__button--trailer film__button upper">
      Watch trailer
    </button></li>`
      : '';

  const genresList = genres.map(genre => genre.name).join(', ');
  const genre =
    genres.length !== 0
      ? `<tr>
        <td class="film__item">Genre</td>
        <td class="film__details">${genresList}</td>
      </tr>`
      : '';
  const markup = `
        <div class="modal__wrapping">
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
                    <span class="film__rating"
                      >${vote_average.toFixed(1)}
                    </span>
                    /
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
            <div>
              <h3 class="film__about--title upper">About</h3>
              <p class="film__about--text">${overview}</p>
            </div>
            <div class="film__button--wrapper">
              <ul class="btn-list js-btn-add-list">
                <li class="btn-list__item">
                  <button
                    type="button"
                    class="button film__button upper"
                    data-addto="watched"
                  >
                    Add to watched
                  </button>
                </li>
                <li class="btn-list__item">
                  <button
                    type="button"
                    class="button film__button upper"
                    data-addto="queue"
                  >
                    Add to queue
                  </button>
                </li>
                <li class="btn-list__item">
                <button
                type="button"
                class="button film__button--recommended film__button upper"
                data-addto="queue"
                >
                Recommended
                </button>
                </li>
                ${trailerButton}
              </ul>
            </div>
          </div>
        </div>
      `;
  modal.innerHTML = markup;
}

function addTrailersMarkup({ videos }) {
  const trailers = videos.results
    .map(trailer => {
      return `<li class="film__trailer--item">
      <iframe 
      class="film__trailer"
      src="https://www.youtube.com/embed/${trailer.key}"
      title="YouTube video player"
       frameborder="0"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       allowfullscreen
     ></iframe>
     </li>`;
    })
    .join('');
  return `<ul class="film__trailers">${trailers}</ul>`;
}

export { createModalMarkup, addTrailersMarkup };
