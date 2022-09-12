import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0_qdFIqWb_tSSa9OeZNdGIARmELFdqqw",
  authDomain: "house-marketplace-app-a732a.firebaseapp.com",
  projectId: "house-marketplace-app-a732a",
  storageBucket: "house-marketplace-app-a732a.appspot.com",
  messagingSenderId: "638316410113",
  appId: "1:638316410113:web:e2a09125c295dbfaa45700"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()