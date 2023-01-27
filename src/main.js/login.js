import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyARNRNbYX7sZVx7e1EUAfDDynq2YzI-Mg0',
  authDomain: 'myproject-551520.firebaseapp.com',
  projectId: 'myproject-551520',
  storageBucket: 'myproject-551520.appspot.com',
  messagingSenderId: '460866384248',
  appId: '1:460866384248:web:6c5f416450cb9fe7c4188d',
};
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const signIn = document.getElementById('sing_in');
const onLogin = event => {
  signInWithPopup(auth, provider)
    .then(result => {
      const credential = GoogleAuthProvider.credentialFromResult(result);

      const token = credential.accessToken;
      const user = result.user;
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};

signIn.addEventListener('click', onLogin);
