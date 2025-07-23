// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics"; // Only use if needed and in production
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuoqAnKKn_9wT2Atcx3nfE1RmnUDSvQ2Y",
  authDomain: "backpackr-54d0a.firebaseapp.com",
  projectId: "backpackr-54d0a",
  storageBucket: "backpackr-54d0a.appspot.com",
  messagingSenderId: "965195269478",
  appId: "1:965195269478:web:03619ade405ca5431674a7",
  measurementId: "G-CBNF10R2D1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Only initialize analytics if you are sure the environment supports it
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { app, db, storage, auth };