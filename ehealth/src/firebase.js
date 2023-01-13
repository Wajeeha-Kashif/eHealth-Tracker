// Importing the required functions from firebase
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import { getAuth } from "firebase/auth";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0OKridpsECi5Q9AXlpLwbIrFNb-YHtRw",
  authDomain: "ehealthtracker-82b8b.firebaseapp.com",
  projectId: "ehealthtracker-82b8b",
  storageBucket: "ehealthtracker-82b8b.appspot.com",
  messagingSenderId: "1084931067213",
  appId: "1:1084931067213:web:425ef22323d84ab35ebb04"
};

firebase.initializeApp({
  apiKey: "AIzaSyB0OKridpsECi5Q9AXlpLwbIrFNb-YHtRw",
  authDomain: "ehealthtracker-82b8b.firebaseapp.com",
  projectId: "ehealthtracker-82b8b",
  storageBucket: "ehealthtracker-82b8b.appspot.com",
  messagingSenderId: "1084931067213",
  appId: "1:1084931067213:web:425ef22323d84ab35ebb04"
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db= getFirestore(app);

const fb = firebase;
export default fb;