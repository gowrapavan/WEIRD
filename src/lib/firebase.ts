import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBy4SMTgNnexF8nbGj-PXGAFgjqu69AIOc",
  authDomain: "weird-a7e0c.firebaseapp.com",
  projectId: "weird-a7e0c",
  storageBucket: "weird-a7e0c.appspot.com",
  messagingSenderId: "444019813633",
  appId: "1:444019813633:web:3a0a532936fa1017b93f00",
  measurementId: "G-W1PY7JSRVZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);  // Optional if you use analytics
