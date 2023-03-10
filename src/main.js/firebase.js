import { USER, app } from './user-manager';
import { getFirestore, doc, setDoc, getDoc, getDocs, deleteDoc, collection, query, where } from "firebase/firestore";
const db = getFirestore(app);
const getMovies = async (list) => {
    const usercollection = collection(db, "users", USER, list);
    const querySnapshot = await getDocs(usercollection);
    const res = [];
    querySnapshot.forEach((doc) => {
        res.push(doc.data());
    })
    return res;
}

const updateLocalStorage = async (list) => {
    const data = await getMovies(list);
    localStorage.setItem(list, JSON.stringify(data));
}

export const setMovie = async (list, data) => {
    await setDoc(doc(db, "users", USER, list, String(data.id)), data);
    await updateLocalStorage(list);
    return true;
}

export const removeMovie = async (list, id) => {
    await deleteDoc(doc(db, "users", USER, list, String(id)));
    await updateLocalStorage(list);
    return true;
}

export const init = async() => {
    await updateLocalStorage('watched');
    await updateLocalStorage('queue');
    console.log('done');
}