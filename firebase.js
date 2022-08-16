import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCqoBQQd9PEV5YYWL9LxjujSBmI24oIPg4",
  authDomain: "fir-auth-reactnative-afc50.firebaseapp.com",
  projectId: "fir-auth-reactnative-afc50",
  storageBucket: "fir-auth-reactnative-afc50.appspot.com",
  messagingSenderId: "148582328362",
  appId: "1:148582328362:web:d04da3d224c2b67cffbb53",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
