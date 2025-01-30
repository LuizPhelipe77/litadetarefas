import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; //para fazer login

const firebaseConfig = {
    apiKey: "AIzaSyB6y_Mhjct5mYLkO6k3JE5YgZhG5y2hcTA",
    authDomain: "projeto-f9610.firebaseapp.com",
    projectId: "projeto-f9610",
    storageBucket: "projeto-f9610.firebasestorage.app",
    messagingSenderId: "633691984728",
    appId: "1:633691984728:web:d3fdb0265d984f0dbe8b2d",
    measurementId: "G-C9V0HYW9N1"
  };

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);   
const auth = getAuth(firebaseApp)

export { db, auth };