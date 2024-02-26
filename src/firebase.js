import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyATpBJp6Cqmc9prmpq_TMIB66QwU-Hvh60",
    authDomain: "linkedin-clone-87eb0.firebaseapp.com",
    projectId: "linkedin-clone-87eb0",
    storageBucket: "linkedin-clone-87eb0.appspot.com",
    messagingSenderId: "132823962998",
    appId: "1:132823962998:web:bf972109eebd197cc5d657"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };