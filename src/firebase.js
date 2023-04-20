import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABtvoG6ukh-hnyUeqDGipVKUUyPRlx_s8",
  authDomain: "fir-auth-bb988.firebaseapp.com",
  projectId: "fir-auth-bb988",
  storageBucket: "fir-auth-bb988.appspot.com",
  messagingSenderId: "897426348924",
  appId: "1:897426348924:web:b84b74bd2ab4bf5267e2f9",
  measurementId: "G-GHBZTZKVCW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
// const analytics = getAnalytics(app);