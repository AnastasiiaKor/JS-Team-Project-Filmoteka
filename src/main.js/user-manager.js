import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { collection } from "firebase/firestore";
import { doc, setDoc, getDoc, collection, query, where } from "firebase/firestore"; 
import { FManager } from "./library-manager";

const firebaseConfig = {
  apiKey: "AIzaSyA8W0hTcfR6KigXVFgqdjQIjt-RMBSyFo0",
  authDomain: "filmoteka-5d02e.firebaseapp.com",
  projectId: "filmoteka-5d02e",
  storageBucket: "filmoteka-5d02e.appspot.com",
  messagingSenderId: "588180914435",
  appId: "1:588180914435:web:0ccde1296d8f77415de936"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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
  console.log(user);
  const usersCollectionRef = collection(db, user);
}

export const setData = async (data, id) => {
  await setDoc(doc(db, user, 'watched', String(id)), data);
  const docRef = doc(db, 'users', user);
  const docSnap = await getDoc(docRef);
  console.log(docSnap);
}
/* const q = query(collection(db, "cities"), where("capital", "==", true)); */