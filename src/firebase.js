import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_XFWBIqCwTeX7GmHTlLjudnn2ZYRJc44",
  authDomain: "chatting-app-f615b.firebaseapp.com",
  projectId: "chatting-app-f615b",
  storageBucket: "chatting-app-f615b.appspot.com",
  messagingSenderId: "799330041257",
  appId: "1:799330041257:web:d7a2f52bb9781c03fdd8b8",
  measurementId: "G-8YGWQN0E1Q"
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
