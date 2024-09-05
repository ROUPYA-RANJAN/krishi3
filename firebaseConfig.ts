// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNOdvsUUdpqIcX9gEC1Kq6vBHus8Kvcl4",
  authDomain: "krishibaazar-cd5ce.firebaseapp.com",
  projectId: "krishibaazar-cd5ce",
  storageBucket: "krishibaazar-cd5ce.appspot.com",
  messagingSenderId: "1017565881299",
  appId: "1:1017565881299:web:04ca3003d5c487b7f6c526"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();
export { auth, db };

function getFirestore() {
  throw new Error("Function not implemented.");
}
function getAuth(app: FirebaseApp) {
  throw new Error("Function not implemented.");
}

