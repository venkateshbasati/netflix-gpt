// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7COAwklyujISB_JUB7ZM2ailOAf2TIlg",
  authDomain: "netflix-gpt-1f4e7.firebaseapp.com",
  projectId: "netflix-gpt-1f4e7",
  storageBucket: "netflix-gpt-1f4e7.appspot.com",
  messagingSenderId: "371934165316",
  appId: "1:371934165316:web:20d19a6f6caa495ac8ff11",
  measurementId: "G-TNFSF9K43B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();