import { USER, db } from './user-manager';
import { collection } from "firebase/firestore";
import { doc, setDoc, getDoc, collection, query, where } from "firebase/firestore";

export const isWatched = async (id) => {
    return true // if the movie with id is in watched list
}

export const isQueue = async (id) => {
    return true // if the movie with id is in queue list
}

export const setMovie = async (list, data) => {
    const rec = {
        list,
        id: data.id,
        data
    }
    await setDoc(doc(db, USER, String(id)), data);
    console.log('saved');
}
/* const getWatched = () => {

}

export const setData = async (data, id) => {
    await setDoc(doc(db, user, 'watched', String(id)), data);
    const docRef = doc(db, 'users', user);
    const docSnap = await getDoc(docRef);
    console.log(docSnap);
  }
  const q = query(collection(db, "cities"), where("capital", "==", true));
  const usersCollectionRef = collection(db, USER);  */