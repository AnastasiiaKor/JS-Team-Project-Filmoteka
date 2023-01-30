import { removeMovie, setMovie } from './firebase';

const isAlreadyWatched = (id) => {
    return JSON.parse(localStorage.getItem('watched')).map(e => e.id).includes(id);
}

export const initBtns = (data) => {
    const btnAddToWatched = document.querySelector('[data-addto="watched"]');
    const btnAddToQueue = document.querySelector('[data-addto="queue"]');

    if(isAlreadyWatched(data.id)) {
        btnAddToWatched.textContent = 'remove from watched'
        btnAddToWatched.addEventListener('click', () => {
            removeMovie('watched', data.id);
        })
    } else {
        btnAddToWatched.textContent = 'add to watched'
        btnAddToWatched.addEventListener('click', () => {
            setMovie('watched', data);
        })
    };
    
}