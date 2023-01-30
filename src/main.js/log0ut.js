const USER = 'user';
const WAS_USER_GREETED = 'wasUserGreeted';
const signOut = document.getElementById('sign_out');
const library = document.getElementById('library');


export const onSignOut = event => {
    localStorage.removeItem(USER);
    localStorage.removeItem(WAS_USER_GREETED);
    signOut.remove();
    library.remove();
    const lib = `<li class="nav-list__item" id="sign_in">
                     <a class="nav-list__link" href="./index.html">sign in</a>
                 </li>`;
    list.insertAdjacentHTML('beforeend', lib);
};

signOut?.addEventListener('click', onSignOut);
