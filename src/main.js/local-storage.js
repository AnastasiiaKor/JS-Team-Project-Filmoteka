import { setData } from './kr580vm80a';

function setLocalStorage(data) {
  const btnAddList = document.querySelector('.js-btn-add-list');
  const btnAddToWatched = document.querySelector('[data-addto="watched"]');
  const btnAddToQueue = document.querySelector('[data-addto="queue"]');

  checkLS();
  console.log(data);
  setData(data, data.id);
  btnAddList.addEventListener('click', onBtnClick);

  function onBtnClick(event) {
    if (!event.target.hasAttribute('data-addto')) return;

    const lsKey = event.target.dataset.addto;

    if (!localStorage.getItem(lsKey)) {
      localStorage.setItem(lsKey, JSON.stringify([data]));
      console.log(lsKey);

      checkLS();

      return;
    }

    let lsValue = JSON.parse(localStorage.getItem(lsKey));
    const indForDel = lsValue.findIndex(fiml => fiml.id === data.id);

    if (!!~indForDel) {
      lsValue.splice(indForDel, 1);
      localStorage.setItem(lsKey, JSON.stringify(lsValue));
    } else {
      lsValue.push(data);
      localStorage.setItem(lsKey, JSON.stringify(lsValue));
    }

    checkLS();
  }

  function checkLS() {
    if (localStorage.getItem('watched')) {
      let lsWatchedValue = JSON.parse(localStorage.getItem('watched'));
      const indInLS = lsWatchedValue.findIndex(fiml => fiml.id === data.id);

      if (!!~indInLS) {
        btnAddToWatched.textContent = 'Remove from watched';
      } else {
        btnAddToWatched.textContent = 'Add to watched';
      }
    }

    if (localStorage.getItem('queue')) {
      let lsQueueValue = JSON.parse(localStorage.getItem('queue'));
      const indInLS = lsQueueValue.findIndex(fiml => fiml.id === data.id);

      if (!!~indInLS) {
        btnAddToQueue.textContent = 'Remove from queue';
      } else {
        btnAddToQueue.textContent = 'Add to queue';
      }
    }
  }
}

export { setLocalStorage };
