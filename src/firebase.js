import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGQ3u9pBpPc7fLeLE90sqGNTpg7nWuvgA",
  authDomain: "whatsapp-clone-15a0a.firebaseapp.com",
  projectId: "whatsapp-clone-15a0a",
  storageBucket: "whatsapp-clone-15a0a.appspot.com",
  messagingSenderId: "607757361524",
  appId: "1:607757361524:web:465d2054e0b36799434c21",
  measurementId: "G-SYMHTT6RLC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider };
