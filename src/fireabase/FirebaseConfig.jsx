// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import { getStorage } from "firebase/storage"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGGGaMiwAW3zoFRGXWR2B6s7o_NL5lKmY",
  authDomain: "myfirstapp-aec0f.firebaseapp.com",
  projectId: "myfirstapp-aec0f",
  storageBucket: "myfirstapp-aec0f.appspot.com",
  messagingSenderId: "171244323881",
  appId: "1:171244323881:web:e399c373efd6cdd26d8838"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {fireDB, auth, storage}