import { getFirestore, addDoc, deleteDoc, updateDoc, getDocs, collection, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyCagJFZ_bUsxlFywdIhDYGqPqKgVHKsbeo",
    authDomain: "devto-retojs.firebaseapp.com",
    projectId: "devto-retojs",
    storageBucket: "devto-retojs.appspot.com",
    messagingSenderId: "1019303882414",
    appId: "1:1019303882414:web:2cd31fe2dcd4834582073f"
};

// * conection to firebase
const app = initializeApp(firebaseConfig);


// * conection to firestore
const db = getFirestore();


// * Get
export const getTasks = () => getDocs(collection(db, 'DevtoPOST'));


// *Post
export const post = (data) => addDoc(collection(db, 'DevtoPOST'),data)

export const docRef = (id) => getDoc(doc(db, 'DevtoPOST', id));

// *Delete
export const deletePost = (id) => deleteDoc(doc(db, 'DevtoPOST', id ));


