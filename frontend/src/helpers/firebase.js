// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBc_cYfTTCtfuFWnSsobSr4Iw1AOSsNXcY",
  authDomain: "fileupload-a3e51.firebaseapp.com",
  projectId: "fileupload-a3e51",
  storageBucket: "fileupload-a3e51.appspot.com",
  messagingSenderId: "67920820769",
  appId: "1:67920820769:web:764a037e83c6d295dec160",
  measurementId: "G-HKCPKTTKN2"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)