import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { init } from './firebase';

export let USER;
const signIn = document.querySelector('#sign_in');
const library = document.querySelector('#library_link');

const firebaseConfig = {
  apiKey: 'AIzaSyASYZ8NOzf1HV_qXySt_PAWGOCo9aSEqfI',
  authDomain: 'filmoteka-tp.firebaseapp.com',
  projectId: 'filmoteka-tp',
  storageBucket: 'filmoteka-tp.appspot.com',
  messagingSenderId: '973907143233',
  appId: '1:973907143233:web:fc416ff81e72bf4792b4c0',
};

export const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth();

const onLogout = () => {
  localStorage.removeItem('user');
  USER = '';
  signIn.textContent = 'SIGN IN';
  library.parentNode.classList.add('disabled');
  signIn.removeEventListener('click', onLogout);
  signIn.addEventListener('click', onLogin);
};

const updHeaderOnLogin = () => {
  signIn.textContent = 'SIGN OUT';
  library.parentNode.classList.remove('disabled');
  signIn.removeEventListener('click', onLogin);
  signIn.addEventListener('click', onLogout);
};

const onLogin = event => {
  /* event.preventDefault(); */
  signInWithPopup(auth, provider)
    .then(result => {
      const credential = GoogleAuthProvider.credentialFromResult(result);

      const token = credential.accessToken;
      const user = result.user;
      localStorage.setItem('user', user.uid);
      localStorage.setItem('username', user.displayName);
      USER = user.uid;
      updHeaderOnLogin();
      init();
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};

signIn.addEventListener('click', onLogin);
// check user ID on local storage
const user = localStorage.getItem('user');
if (user) {
  USER = user;
  updHeaderOnLogin();
}
