// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRt5XJClyxGmw--yh3pPzOKgr3AeAM580",
  authDomain: "blessed-c4e9b.firebaseapp.com",
  projectId: "blessed-c4e9b",
  storageBucket: "blessed-c4e9b.appspot.com",
  messagingSenderId: "531139726168",
  appId: "1:531139726168:web:a542ff4845f3132e51f32d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  const db = getFirestore(app); 

  export default db;
