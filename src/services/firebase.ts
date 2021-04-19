import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA4eu9ie6EQI35KlgC3W2-spU0XOMkK5jQ",
  authDomain: "if67h-cf071.firebaseapp.com",
  projectId: "if67h-cf071",
  storageBucket: "if67h-cf071.appspot.com",
  messagingSenderId: "717334647457",
  appId: "1:717334647457:web:89704b5b72212cfc8656e0"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export default {
  firebase,
  db,
  auth,
};