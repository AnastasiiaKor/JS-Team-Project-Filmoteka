function createGalleryMarkup(gallery, { results }) {
  const markup = results
    .map(
      ({ id, poster_path, title, genre_ids, release_date, vote_average }) => {
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
                            <span class="gallery__movie-rating">${vote_average.toFixed(
                              1
                            )}</span>
                            </p>
                            
                        </div>
                    </div>
                </a>
             </li>   
            `;
      }
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
}

export { createGalleryMarkup };
