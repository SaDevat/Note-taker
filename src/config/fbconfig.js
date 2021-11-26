// FIREBASE - CONFIG

import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat';

const firebaseConfig = {

  apiKey: "AIzaSyB1yC4Y3KMbyNfs3dPDWYXSH09e4Y76S0U",

  authDomain: "notes-app-sdevat.firebaseapp.com",

  projectId: "notes-app-sdevat",

  storageBucket: "notes-app-sdevat.appspot.com",

  messagingSenderId: "907123783557",

  appId: "1:907123783557:web:f636dacea927cac241b6ec"

};


// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);

export default app;

