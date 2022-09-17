// * Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
// TODO: import { getFirestore, addDoc, deleteDoc, updateDoc, getDocs, collection, doc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

// https://firebase.google.com/docs/web/setup#available-libraries

// *  Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCagJFZ_bUsxlFywdIhDYGqPqKgVHKsbeo",
    authDomain: "devto-retojs.firebaseapp.com",
    projectId: "devto-retojs",
    storageBucket: "devto-retojs.appspot.com",
    messagingSenderId: "1019303882414",
    appId: "1:1019303882414:web:2cd31fe2dcd4834582073f"
};

// * Initialize Firebase
const app = initializeApp(firebaseConfig);

// * conection to firestore
const db = getFirestore();

