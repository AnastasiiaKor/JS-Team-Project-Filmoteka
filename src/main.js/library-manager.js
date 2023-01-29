import { USER, db } from './user-manager';
import { collection } from "firebase/firestore";
import { doc, setDoc, getDoc, getDocs, collection, query, where } from "firebase/firestore";

export const isWatched = async (id) => {
    const usersRef = doc(db, USER, String(id));
    const docSnapshot = await getDoc(usersRef);
    return docSnapshot.data() // if the movie with id is in watched list
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
    await setDoc(doc(db, USER, String(data.id)), rec);
    console.log('saved');
}

export const getMovies = async (list) => {
    const usercollection = collection(db, USER);
    const q = query(usercollection, where("list", "==", list));
    const querySnapshot = await getDocs(q);
    const res = [];
    querySnapshot.forEach((doc) => {
        res.push(doc.data().data);
    })
    return res;
}

async function test() {
    const res = await isWatched(866413);
    console.log(res);
}

test();
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