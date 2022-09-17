import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAjocJlXVI73e8ZEhNJSsaZuLVuGWtb3Dw",
  authDomain: "cp-amazzon-clone.firebaseapp.com",
  databaseURL: "https://cp-amazzon-clone.firebaseio.com",
  projectId: "cp-amazzon-clone",
  storageBucket: "cp-amazzon-clone.appspot.com",
  messagingSenderId: "706354196126",
  appId: "1:706354196126:web:13cec40a229d7af895d58f",
  measurementId: "G-7GB31PH507",
});

const auth = firebase.auth();

export { auth };
