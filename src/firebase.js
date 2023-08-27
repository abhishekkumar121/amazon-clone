import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCgIGX6TTEtkf6BzAL56WQ94_IVlfgr4uE",
    authDomain: "clone-c0a31.firebaseapp.com",
    projectId: "clone-c0a31",
    storageBucket: "clone-c0a31.appspot.com",
    messagingSenderId: "395126159645",
    appId: "1:395126159645:web:877e8fcdd52944c662c9f4",
    measurementId: "G-81B378QWY5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db,auth };