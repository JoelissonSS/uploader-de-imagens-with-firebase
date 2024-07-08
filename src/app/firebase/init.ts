// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getStorage, ref } from "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyAqR49cii6ScDhBy0BwMpQTfFvP2ZTmiNo",
    authDomain: "joelisson-b8855.firebaseapp.com",
    projectId: "joelisson-b8855",
    storageBucket: "joelisson-b8855.appspot.com",
    messagingSenderId: "56282713634",
    appId: "1:56282713634:web:f16f2344e171a07cc7047b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)