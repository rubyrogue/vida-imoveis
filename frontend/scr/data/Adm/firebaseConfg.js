import firebase from 'firebase/compat/app';
import "firebase/compat/storage";
import "firebase/compat/auth"; 
//import {collection} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCD6Bj2pgKYpn0YMbk99lnPv-cSNEgBgoo",
    authDomain: "vida-imoveis.firebaseapp.com",
    projectId: "vida-imoveis",
    storageBucket: "vida-imoveis.appspot.com",
    messagingSenderId: "492991576176",
    appId: "1:492991576176:web:21659e5e0daab0a3d31cb5",
    measurementId: "G-92JN66YT3X"
};
const fire = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const auth = fire.auth();

//export const firebaseStore = firebase.collection('imoveis');
export const storage = firebase.storage();

export default auth;
