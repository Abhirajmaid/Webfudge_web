// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDhTLi5JV6mOng0o7flchdlwNOm_yC4sEM",
    authDomain: "webfudge-25d48.firebaseapp.com",
    projectId: "webfudge-25d48",
    storageBucket: "webfudge-25d48.firebasestorage.app",
    messagingSenderId: "754240524674",
    appId: "1:754240524674:web:3912cc2f92edbb2437ff9b",
    measurementId: "G-6F48LG5CRF"
};

// --- Initialize Firebase only once ---
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// --- Firestore Security Rules Notice ---
// To fix "FirebaseError: Missing or insufficient permissions.",
// update your Firestore security rules to allow writes for your use case.
// For development, you can use the following (NOT for production!):

/*
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
*/

// In production, restrict access as needed.

export { db };
