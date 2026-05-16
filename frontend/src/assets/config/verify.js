import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyAus1JtG1nY0R6PXrjVU1OUxowjeYTyIk4",
  authDomain: "ecommeres-89e37.firebaseapp.com",
  projectId: "ecommeres-89e37",
  storageBucket: "ecommeres-89e37.firebasestorage.app",
  messagingSenderId: "591813388320",
  appId: "1:591813388320:web:531e01a3944504eba2f445",
  measurementId: "G-Z59EYH4XW2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const verify = getAuth(app);

export default verify
