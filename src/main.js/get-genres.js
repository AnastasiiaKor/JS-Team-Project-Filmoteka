function getGenresById(ids) {
  const genresList = JSON.parse(localStorage.getItem('genres'));
  genresList.find(genre => genre.name === 'Science Fiction').name = 'Sci-Fi';
  let genres = ids.map(idToFind => {
    const { id, name } = genresList.find(genre => genre.id === idToFind);
    return `<span class="genre-link" data-id="${id}">${name}</span>`;
  });
  if (genres.length > 3) {
    genres = genres.slice(0, 2);
    genres.push('<span class="genre-link" data-id="trending">Other</span>');
  }
  return genres.join(', ');
}

export { getGenresById };
