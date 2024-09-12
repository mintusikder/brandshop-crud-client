// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9KU7BW_dH-lUbhWj9N2dGnm8qQE9Hc3M",
  authDomain: "brandshop-crud-auth.firebaseapp.com",
  projectId: "brandshop-crud-auth",
  storageBucket: "brandshop-crud-auth.appspot.com",
  messagingSenderId: "361621507912",
  appId: "1:361621507912:web:07393c984802a823e9ad7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app