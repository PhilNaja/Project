import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCo1lkNcKn-SwRe-vnCnefChm4F327dFDk",
  authDomain: "pwpee-6f643.firebaseapp.com",
  projectId: "pwpee-6f643",
  storageBucket: "pwpee-6f643.appspot.com",
  messagingSenderId: "1012904327659",
  appId: "1:1012904327659:web:61cf9ca6590ba713cb81ae",
  measurementId: "G-5KNRXG8VDD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;