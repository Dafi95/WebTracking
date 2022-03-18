import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getDatabase } from "firebase/database";

const config = {
  apiKey: "AIzaSyB_czMUXUXpd40-Fh4PQxWyq_ZedRT9GE0",
  authDomain: "webtracking-9dc4b.firebaseapp.com",
  databaseURL: "https://webtracking-9dc4b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "webtracking-9dc4b",
  storageBucket: "webtracking-9dc4b.appspot.com",
  messagingSenderId: "947710022696",
  appId: "1:947710022696:web:5bf9f08925f6b81c3b511d",
  measurementId: "G-VMMNR0R2EK"
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();
const auth = firebaseApp.auth();

firebase.initializeApp(config);
export const database = getDatabase(firebaseApp);
export default auth;


