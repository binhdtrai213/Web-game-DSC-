import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCpMV7oa-Ub9JggYajdeCwP5iZ1WvkbWpc",
    authDomain: "web-game-dsc.firebaseapp.com",
    databaseURL: "https://web-game-dsc-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "web-game-dsc",
    storageBucket: "web-game-dsc.appspot.com",
    messagingSenderId: "346312806625",
    appId: "1:346312806625:web:ce9990747594b69101e7a0",
    measurementId: "G-MYD8JRXN9F"
};

// Initialize Firebase 
if (!firebase.apps.length)
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;