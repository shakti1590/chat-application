import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2VnjcnfI3AdfkXVeVZhI_KvqQxfqENIo",
  authDomain: "chatapp-82160.firebaseapp.com",
  projectId: "chatapp-82160",
  storageBucket: "chatapp-82160.appspot.com",
  messagingSenderId: "966091387488",
  appId: "1:966091387488:web:77d6356d69169c076ac905",
  measurementId: "G-H5999FBT5H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
