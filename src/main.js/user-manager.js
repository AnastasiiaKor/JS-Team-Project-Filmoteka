import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
 
/* import { FManager } from "./library-manager"; */
export let USER;

const firebaseConfig = {
  apiKey: "AIzaSyA8W0hTcfR6KigXVFgqdjQIjt-RMBSyFo0",
  authDomain: "filmoteka-5d02e.firebaseapp.com",
  projectId: "filmoteka-5d02e",
  storageBucket: "filmoteka-5d02e.appspot.com",
  messagingSenderId: "588180914435",
  appId: "1:588180914435:web:0ccde1296d8f77415de936"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();
const auth = getAuth();
const signIn = document.getElementById('sing_in');
const onLogin = event => {
  signInWithPopup(auth, provider)
    .then(result => {
      const credential = GoogleAuthProvider.credentialFromResult(result);

      const token = credential.accessToken;
      const user = result.user;
      localStorage.setItem('user', user.uid);
      USER = user.uid;
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};



const showLogin = () => {
  console.log('show login item in the header');
  signIn.addEventListener('click', onLogin);
}

// check user ID on local storage
const user = localStorage.getItem('user');
if(!user) {showLogin();}
else {
  USER = user;
  console.log(user);
}

