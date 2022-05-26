// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_XwhqWayYUw40bZ5vGVu3GAYYS15AWfE",
  authDomain: "sadi-tech-house.firebaseapp.com",
  projectId: "sadi-tech-house",
  storageBucket: "sadi-tech-house.appspot.com",
  messagingSenderId: "744858580714",
  appId: "1:744858580714:web:8f38843450f56b96a50993"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;