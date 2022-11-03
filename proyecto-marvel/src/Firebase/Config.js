import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBc_SOaME0YLy048R-TCqn0avB3BfQmEU8",
  authDomain: "pruebareactjs-48d24.firebaseapp.com",
  projectId: "pruebareactjs-48d24",
  storageBucket: "pruebareactjs-48d24.appspot.com",
  messagingSenderId: "603700914167",
  appId: "1:603700914167:web:c3bf9ab8d54a6728f1f0f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreInit = () => app