import { getGenresById } from '../get-genres';

function createGalleryMarkup(results) {
  const markup = results
    .map(result => {
      const {
        id,
        poster_path,
        title,
        genre_ids,
        release_date = '',
        vote_average,
        vote_count,
      } = result;
      const date = new Date(release_date).getFullYear() || '';
      const genres = genre_ids.length !== 0 ? getGenresById(genre_ids) : '';
      const poster = poster_path
        ? `<img class="gallery__poster" src="https://image.tmdb.org/t/p/w500${poster_path}" loading="lazy" />`
        : '';
      const separator = genre_ids.length && date ? ' | ' : '';

      const info =
        genres || date
          ? `<span class="gallery__movie-info">${genres}${separator}${date}</span>`
          : '';

      const ratings = vote_count
        ? `<span class="gallery__movie-rating">${vote_average.toFixed(
            1
          )}</span>`
        : '';

      return `<li class="gallery__item">
                <a class="gallery__link" href="${id}" title="${title}">
                    <div class='gallery__event-wrapper'>
                        <div class='gallery__poster-wrapper'>${poster}</div>
                        <div class="gallery__description">
                            <p class="gallery__movie-title">${title}</p>
                            <p class="gallery__movie-meta">
                              ${info}
                              ${ratings}
                            </p>
                            
                        </div>
                    </div>
                </a>
             </li>   
            `;
    })
    .join('');
  return markup;
}

export { createGalleryMarkup };
