import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBxGkhesq1r2UVnfTzE8k_M_1a6Bo1_dhw",
  authDomain: "storm-safety.firebaseapp.com",
  projectId: "storm-safety",
  storageBucket: "storm-safety.firebasestorage.app",
  messagingSenderId: "250388841182",
  appId: "1:250388841182:web:ad8bf054ad6627bae9f84f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);