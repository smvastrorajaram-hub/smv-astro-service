import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKXyfZ9sjGmej7ygxHpzHNcNysMXHuvSs",
  authDomain: "smv-astro.firebaseapp.com",
  projectId: "smv-astro",
  storageBucket: "smv-astro.firebasestorage.app",
  messagingSenderId: "299081899217",
  appId: "1:299081899217:web:8d558df08e86037ea539f0",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
