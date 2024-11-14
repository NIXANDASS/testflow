
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAymkgW3gAncfs-vjs7kMGbp5lnnyHU_uM",
    authDomain: "testflow-8029e.firebaseapp.com",
    projectId: "testflow-8029e",
    storageBucket: "testflow-8029e.firebasestorage.app",
    messagingSenderId: "790809566757",
    appId: "1:790809566757:web:78e1a513463d421cc769cc",
    measurementId: "G-X4WYNHD3MH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
