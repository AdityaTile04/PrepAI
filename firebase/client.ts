// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-Tv3mPvFE6U8Ad0HJQW_sEg1ShU5upgs",
  authDomain: "prepai-b4212.firebaseapp.com",
  projectId: "prepai-b4212",
  storageBucket: "prepai-b4212.firebasestorage.app",
  messagingSenderId: "165497159094",
  appId: "1:165497159094:web:87c3fdfa12f0e141159517",
  measurementId: "G-6Z4K0T256S",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
