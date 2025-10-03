import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCC5rEFmo-x7YIop5M-_g4M9UT-JzJ0drQ",
  authDomain: "kwitter-reloaded-90485.firebaseapp.com",
  projectId: "kwitter-reloaded-90485",
  storageBucket: "kwitter-reloaded-90485.firebasestorage.app",
  messagingSenderId: "707209116239",
  appId: "1:707209116239:web:b775c287ae4916b7aa883a",
  measurementId: "G-SYS046GSRZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
