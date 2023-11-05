// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoVpQt0Ge9E13bSQdwmODh7W6cRUMuQG4",
  authDomain: "online-group-study-bb25f.firebaseapp.com",
  projectId: "online-group-study-bb25f",
  storageBucket: "online-group-study-bb25f.appspot.com",
  messagingSenderId: "873922577754",
  appId: "1:873922577754:web:a5932b716b197b71885f63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
