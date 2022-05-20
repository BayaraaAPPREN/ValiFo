// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA7T4NGHy7HNfnTdxYzInU7gEYX_N41j5k",
  authDomain: "giilen.firebaseapp.com",
  projectId: "giilen",
  storageBucket: "giilen.appspot.com",
  messagingSenderId: "722836909005",
  appId: "1:722836909005:web:42a2a108604c2cc8eff284",
  measurementId: "G-91XZEDGTPF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
export { db, auth, provider };