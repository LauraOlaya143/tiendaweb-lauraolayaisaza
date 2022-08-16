import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDsuDJ5GAWes1TLlHmlV3S8jmDQbJYky6s",
    authDomain: "backendtiendaweb41080.firebaseapp.com",
    projectId: "backendtiendaweb41080",
    storageBucket: "backendtiendaweb41080.appspot.com",
    messagingSenderId: "691246130131",
    appId: "1:691246130131:web:6c898665705c08780c0526"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getFirestore(app)