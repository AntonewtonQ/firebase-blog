
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAddJiklKo224fSHgYFkseWpCsp4PXO9-o",
  authDomain: "intrutor-blog.firebaseapp.com",
  projectId: "intrutor-blog",
  storageBucket: "intrutor-blog.appspot.com",
  messagingSenderId: "925625900298",
  appId: "1:925625900298:web:12a195a923ff6f97b4aef3",
  measurementId: "G-88CDKFC9YY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore(app);