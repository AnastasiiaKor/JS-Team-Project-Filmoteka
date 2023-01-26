function createGalleryMarkup(gallery, { results }) {
  const genresList = JSON.parse(localStorage.getItem('genres'));
  console.log(genresList);
  const markup = results
    .map(
      ({ id, poster_path, title, genre_ids, release_date, vote_average }) => {
        const date = new Date(release_date).getFullYear();
        let separator = '';
        if (genre_ids && date) separator = ' | ';
        let genres = genre_ids.map(
          id => genresList.find(genre => genre.id === id).name
        );
        if (genres.length > 3) {
          genres = genres.slice(0, 2);
          genres.push('Other');
        }
        genres = genres.join(', ');
        return `<li class="gallery__item">
                <a class="gallery__link" href="${id}">
                    <div class='gallery__event-wrapper'>
                        <img class="gallery__poster" src="https://image.tmdb.org/t/p/w500${poster_path}" loading="lazy" />
                        <div class="gallery__description">
                            <p class="gallery__movie-title">${title}</p>
                            <p class="gallery__movie-meta">
                            ${genres}${separator}${date}
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
