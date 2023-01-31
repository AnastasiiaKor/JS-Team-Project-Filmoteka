import { removeMovie, setMovie } from './firebase';
import { USER } from './user-manager';

const watchedUpd = new CustomEvent('libraryChange',{
  detail: {section:'watched'}
});
const queueUpd = new CustomEvent('libraryChange',{
  detail: {section:'watched'}
});



const isAlreadyWatched = id => {
  return JSON.parse(localStorage.getItem('watched'))
    .map(e => e.id)
    .includes(id);
};

const isAlreadyQueued = id => {
  return JSON.parse(localStorage.getItem('queue'))
    .map(e => e.id)
    .includes(id);
};

export const initWatchedQueueBtns = data => {
  const btnAddToWatched = document.querySelector('[data-addto="watched"]');
  const btnAddToQueue = document.querySelector('[data-addto="queue"]');
  if (!USER) {
    btnAddToWatched.disabled = true;
    btnAddToQueue.disabled = true;
    const message = document.querySelector('.nologin');
    message.textContent = 'Login is Required';
    return;
  }
  data.genre_ids = data.genres.map(g => g.id);

  if (isAlreadyWatched(data.id)) {
    btnAddToWatched.textContent = 'remove from watched';
  } else {
    btnAddToWatched.textContent = 'add to watched';
  }

  if (isAlreadyQueued(data.id)) {
    btnAddToQueue.textContent = 'remove from queue';
  } else {
    btnAddToQueue.textContent = 'add to queue';
  }

  btnAddToWatched.addEventListener('click', async () => {
    if (isAlreadyWatched(data.id)) {
      await removeMovie('watched', data.id);
      btnAddToWatched.textContent = 'add to watched';
    } else {
      await setMovie('watched', data);
      btnAddToWatched.textContent = 'remove from watched';
    }
    document.dispatchEvent(watchedUpd);
  });

  btnAddToQueue.addEventListener('click', async () => {
    if (isAlreadyQueued(data.id)) {
      await removeMovie('queue', data.id);
      btnAddToQueue.textContent = 'add to queue';
    } else {
      await setMovie('queue', data);
      btnAddToQueue.textContent = 'remove from queue';
    }
    document.dispatchEvent(queueUpd);
  });
};
