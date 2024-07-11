// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwkI4vVzHXgXucrJSMwzgLKufwlfy7aAs",
  authDomain: "react-journal-app-2aa8c.firebaseapp.com",
  projectId: "react-journal-app-2aa8c",
  storageBucket: "react-journal-app-2aa8c.appspot.com",
  messagingSenderId: "827837043890",
  appId: "1:827837043890:web:98fd575bfce23ec50be5ab",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp)
