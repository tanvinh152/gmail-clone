import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBaeDaNII1DFWjZ_dBu_f466RzJ2MpB3Og",
    authDomain: "clone-5803a.firebaseapp.com",
    projectId: "clone-5803a",
    storageBucket: "clone-5803a.appspot.com",
    messagingSenderId: "950126644184",
    appId: "1:950126644184:web:87668cb4de0acd607080ad",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
