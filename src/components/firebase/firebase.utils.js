import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDoAUWrRqFT8HmD7r2PxHpGwqvILjywVos",
    authDomain: "react-ecommerce-v1-db.firebaseapp.com",
    projectId: "react-ecommerce-v1-db",
    storageBucket: "react-ecommerce-v1-db.appspot.com",
    messagingSenderId: "74492559836",
    appId: "1:74492559836:web:ec6bce6d2ab4f7b96ecf19",
    measurementId: "G-P8TL2QHCQD"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;