let gallery = document.querySelector('.gallery');

function createGalleryMarkup(movies) {
  const markup = movies
    .map(({ id, poster_path, title, genre_ids, release_date }) => {
      const date = new Date(release_date).getFullYear();
      const ganres = genre_ids.join(', ');
      const info = [ganres, date].join('|');
      return `<li class="gallery__item">
                <a class="gallery__link" href="${id}">
                    <div class='gallery__event-wrapper'>
                        <img class="gallery__poster" src="https://image.tmdb.org/t/p/w500${poster_path}" loading="lazy" />
                        <div class="gallery__description">
                          <p class="gallery__movie-title">${title}</p>
                          <p class="gallery__movie-meta">${info}</p>
                        </div>
                    </div>
                </a>
             </li>   
            `;
    })
    .join('');

  gallery.innerHTML = markup;
}

export { createGalleryMarkup };
