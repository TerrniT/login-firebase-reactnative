// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqoBQQd9PEV5YYWL9LxjujSBmI24oIPg4",
  authDomain: "fir-auth-reactnative-afc50.firebaseapp.com",
  projectId: "fir-auth-reactnative-afc50",
  storageBucket: "fir-auth-reactnative-afc50.appspot.com",
  messagingSenderId: "148582328362",
  appId: "1:148582328362:web:d04da3d224c2b67cffbb53",
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
