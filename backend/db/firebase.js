// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA27MewH3girKnHbMENUQSnt5xZgqW77tA",
  authDomain: "testflow-4c4ad.firebaseapp.com",
  projectId: "testflow-4c4ad",
  storageBucket: "testflow-4c4ad.firebasestorage.app",
  messagingSenderId: "909576731225",
  appId: "1:909576731225:web:52ac43e1c1ac6504e14f48",
  measurementId: "G-RDJXHCDZ7Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebaseConfig;