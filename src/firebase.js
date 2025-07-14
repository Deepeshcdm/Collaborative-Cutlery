// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdBosCmxShKi8STxak-Fz33GCt_0Ms_q0",
  authDomain: "collaborative-cuttlery.firebaseapp.com",
  projectId: "collaborative-cuttlery",
  storageBucket: "collaborative-cuttlery.firebasestorage.app",
  messagingSenderId: "118458567473",
  appId: "1:118458567473:web:0091d754e6294b812e3e10",
  measurementId: "G-Q74SK9NWPZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize providers
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();

export default app;