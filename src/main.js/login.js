import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { onSignOut } from './log0ut';

const SIGN_OUT = 'sign_out';
const USER = 'user';
const firebaseConfig = {
  apiKey: 'AIzaSyASYZ8NOzf1HV_qXySt_PAWGOCo9aSEqfI',
  authDomain: 'filmoteka-tp.firebaseapp.com',
  projectId: 'filmoteka-tp',
  storageBucket: 'filmoteka-tp.appspot.com',
  messagingSenderId: '973907143233',
  appId: '1:973907143233:web:fc416ff81e72bf4792b4c0',
};
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const signIn = document.getElementById('sign_in');
const list = document.getElementById('list_links');

if (localStorage.getItem(USER)) {
  signIn.remove();
  const lib = `<li class="nav-list__item" id="library">
                <a id="library_link" class="nav-list__link" href="./library.html">my library</a>
              </li>
              <li class="nav-list__item" id=${SIGN_OUT}>
                <a class="nav-list__link" href="./index.html">sign out</a>
              </li>`;
  list.insertAdjacentHTML('beforeend', lib);
  const signOut = document.getElementById(SIGN_OUT);
  signOut.addEventListener('click', onSignOut);
}

const onLogin = event => {
  event.preventDefault();
  signInWithPopup(auth, provider)
    .then(result => {
      const credential = GoogleAuthProvider.credentialFromResult(result);

      const token = credential.accessToken;
      const user = result.user;
      localStorage.setItem(USER, user.displayName);
      
      signIn.remove();
      const libraryLink = `<li class="nav-list__item" id="library">
                              <a id="library_link" class="nav-list__link" href="./library.html">
                                my library
                              </a>
                           </li>
                           <li class="nav-list__item">
                              <a class="nav-list__link" href="./index.html" id=${SIGN_OUT}>sign out</a>
                           </li>`;
      list.insertAdjacentHTML('beforeend', libraryLink);
      const signOut = document.getElementById(SIGN_OUT);
      signOut.addEventListener('click', onSignOut);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};

signIn.addEventListener('click', onLogin);
