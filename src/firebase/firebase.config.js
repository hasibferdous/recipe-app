import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjpJChsgiBI2awuaPHbq5dPuA8b7KGbKA",
  authDomain: "recipe-app-25ff7.firebaseapp.com",
  projectId: "recipe-app-25ff7",
  storageBucket: "recipe-app-25ff7.appspot.com",
  messagingSenderId: "974720005232",
  appId: "1:974720005232:web:e3faad9d05f264d28430b5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
