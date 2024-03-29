import { initializeApp } from "firebase/app";
import {
  getAuth, browserSessionPersistence, createUserWithEmailAndPassword,
  setPersistence, signInWithEmailAndPassword, updateProfile, signOut
} from "firebase/auth";
import { uploadBytes, getStorage, ref, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUNKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_IP
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);


export { uploadBytes, storage, ref, signOut, getDownloadURL, browserSessionPersistence, setPersistence, firebaseAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile };

