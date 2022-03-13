
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBNGmJDQilEn_9zIgDDSfIRib1FXnsECro",
    authDomain: "instagram-demo-961b7.firebaseapp.com",
    projectId: "instagram-demo-961b7",
    storageBucket: "instagram-demo-961b7.appspot.com",
    messagingSenderId: "1056237426796",
    appId: "1:1056237426796:web:08ff77063b71f55a9c6049"
  };
  
// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };