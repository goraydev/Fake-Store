// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getEnvironments } from "../helpers/getEnvironments";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
  VITE_MEASUREMENTID,
} = getEnvironments();


// Your web app's Firebase configuration
//produccion
/*  const firebaseConfig = {
    apiKey: "AIzaSyAcxa38ValEllfEQLhHTaIk3WrHkcL1owU",
    authDomain: "react-cursos-30787.firebaseapp.com",
    projectId: "react-cursos-30787",
    storageBucket: "react-cursos-30787.appspot.com",
    messagingSenderId: "895988051436",
    appId: "1:895988051436:web:d8b7f264c59f6a443ea4c9"
};  */

//testing
/* const firebaseConfig = {
    apiKey: "AIzaSyB0_rAyoVSQQ4dKpv_uaRhztmpM7T2v-0g",
    authDomain: "react-journal-tests.firebaseapp.com",
    projectId: "react-journal-tests",
    storageBucket: "react-journal-tests.appspot.com",
    messagingSenderId: "762552832681",
    appId: "1:762552832681:web:5e653eb8d3b5b44df1cfb8",
    measurementId: "G-23LBNQZKQ1"
  }; 
};
*/

const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID,
  measurementId: VITE_MEASUREMENTID,
}


// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);