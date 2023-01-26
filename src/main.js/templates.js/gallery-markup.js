import { getGenresById } from '../get-genres';

function createGalleryMarkup(results) {
  const markup = results
    .map(result => {
      const { id, poster_path, title, genre_ids, release_date, vote_average } =
        result;
      const date = new Date(release_date).getFullYear();
      let separator = '';
      if (title.length > 30) title = title.slice(0, 30).concat('...');
      if (genre_ids && date) separator = ' | ';
      const genres = getGenresById(genre_ids);

      return `<li class="gallery__item">
                <a class="gallery__link" href="${id}">
                    <div class='gallery__event-wrapper'>
                        <img class="gallery__poster" src="https://image.tmdb.org/t/p/w500${poster_path}" loading="lazy" />
                        <div class="gallery__description">
                            <p class="gallery__movie-title">${title}</p>
                            <p class="gallery__movie-meta">
                              <span class="gallery__movie-info">${genres}${separator}${date}</span>
                              <span class="gallery__movie-rating">${vote_average.toFixed(
                                1
                              )}</span>
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
