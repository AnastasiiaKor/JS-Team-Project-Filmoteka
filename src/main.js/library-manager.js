import { removeMovie, setMovie } from './firebase';

const isAlreadyWatched = (id) => {
    return JSON.parse(localStorage.getItem('watched')).map(e => e.id).includes(id);
}

const isAlreadyQueued = (id) => {
    return JSON.parse(localStorage.getItem('queue')).map(e => e.id).includes(id);
}

export const initBtns = (data) => {
    const btnAddToWatched = document.querySelector('[data-addto="watched"]');
    const btnAddToQueue = document.querySelector('[data-addto="queue"]');

    if(isAlreadyWatched(data.id)) {
        btnAddToWatched.textContent = 'remove from watched'
        btnAddToWatched.addEventListener('click', async () => {
           if(await removeMovie('watched', data.id)) initBtns(data);
        })
    } else {
        btnAddToWatched.textContent = 'add to watched'
        btnAddToWatched.addEventListener('click', async () => {
            data.genre_ids = data.genres.map(g => g.id);
            if(await setMovie('watched', data)) initBtns(data);
        })
    };

    if(isAlreadyQueued(data.id)) {
        btnAddToQueue.textContent = 'remove from queue'
        btnAddToQueue.addEventListener('click', async () => {
           if(await removeMovie('queue', data.id)) initBtns(data);
        })
    } else {
        btnAddToQueue.textContent = 'add to queue'
        btnAddToQueue.addEventListener('click', async () => {
            data.genre_ids = data.genres.map(g => g.id);
            if(await setMovie('queue', data)) initBtns(data);
        })
    };
    
}