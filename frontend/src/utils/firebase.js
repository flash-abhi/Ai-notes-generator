import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "exam-notes-ea294.firebaseapp.com",
  projectId: "exam-notes-ea294",
  storageBucket: "exam-notes-ea294.firebasestorage.app",
  messagingSenderId: "842056871042",
  appId: "1:842056871042:web:12c4c48e59e6b23968d89b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth, provider};