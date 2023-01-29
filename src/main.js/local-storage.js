function setLocalStorage(data) {
  const btnAddList = document.querySelector('.js-btn-add-list');
  const btnAddToWatched = document.querySelector('[data-addto="watched"]');
  const btnAddToQueue = document.querySelector('[data-addto="queue"]');
  const userName = localStorage.getItem('user');

  if (!userName) return;

  checkLS('watched');
  checkLS('queue');

  data.genre_ids = data.genres.map(g => g.id);

  btnAddList.addEventListener('click', onBtnClick);

  function onBtnClick(event) {
    if (!event.target.hasAttribute('data-addto')) return;

    const lsKey = `${userName}_${event.target.dataset.addto}`;

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

    checkLS('watched');
    checkLS('queue');
  }

  function checkLS(storageType = '') {
    if (localStorage.getItem(`${userName}_${storageType}`)) {
      let lsWatchedValue = JSON.parse(
        localStorage.getItem(`${userName}_${storageType}`)
      );
      const indInLS = lsWatchedValue.findIndex(fiml => fiml.id === data.id);

      if (!!~indInLS) {
        btnAddToQueue.textContent = `Remove from ${storageType}`;
      } else {
        btnAddToQueue.textContent = `Add to ${storageType}`;
      }
    }
  }
}

export { setLocalStorage };
