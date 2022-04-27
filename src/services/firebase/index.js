import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBGpFmWqjnmZNC0y2o5VJYlueLnD4uKCMs",
  authDomain: "appreact-9aea2.firebaseapp.com",
  projectId: "appreact-9aea2",
  storageBucket: "appreact-9aea2.appspot.com",
  messagingSenderId: "624107585006",
  appId: "1:624107585006:web:98e7e239d72415b18362ff"
};

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app);