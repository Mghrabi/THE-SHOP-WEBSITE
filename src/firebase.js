import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCO_tFPNMnNo0UpdO79WXgDbCPcFplIis8",
    authDomain: "clothing-web-app-e0024.firebaseapp.com",
    databaseURL: "https://clothing-web-app-e0024.firebaseio.com",
    projectId: "clothing-web-app-e0024",
    storageBucket: "clothing-web-app-e0024.appspot.com",
    messagingSenderId: "731535189190",
    appId: "1:731535189190:web:15e834773f8a0a357363c7",
    measurementId: "G-KRNEBE81T4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;