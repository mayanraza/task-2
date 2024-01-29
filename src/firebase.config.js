import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage"




// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGLdfVCoX26DLMl_8jNUzDVpRNPg0q5yU",
    authDomain: "task-2-bb2de.firebaseapp.com",
    projectId: "task-2-bb2de",
    storageBucket: "task-2-bb2de.appspot.com",
    messagingSenderId: "731917540868",
    appId: "1:731917540868:web:3fadf2cbfa46cfa366df51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)


export default app