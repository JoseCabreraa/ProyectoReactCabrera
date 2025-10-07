import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBp28S25a8qFr9KHGJRB4UhKXjSZ3_NZ0U",
  authDomain: "ecomerce-app-5f4e0.firebaseapp.com",
  projectId: "ecomerce-app-5f4e0",
  storageBucket: "ecomerce-app-5f4e0.firebasestorage.app",
  messagingSenderId: "944882720285",
  appId: "1:944882720285:web:97415bb4ee6cd5587970f4",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
