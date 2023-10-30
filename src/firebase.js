// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDyZzmAh3-GkYPjJlaJq3JDf1cGOjDhGUY",
    authDomain: "snusy-6e4ac.firebaseapp.com",
    projectId: "snusy-6e4ac",
    storageBucket: "snusy-6e4ac.appspot.com",
    messagingSenderId: "288214316938",
    appId: "1:288214316938:web:f8284e68a04f04a355fa73",
    measurementId: "G-8Y5W4E6S25"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
