// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

var firebaseApp = firebase.initializeApp({
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID

    apiKey: "AIzaSyCNrJxkj31HBPNYwA-Hc4zQz1p12bCidkA",
    authDomain:"portfolio-kavish-729d6.firebaseapp.com",
    projectId:"portfolio-kavish-729d6",
    storageBucket:"portfolio-kavish-729d6.appspot.com",
    messagingSenderId:"151716688191",
    appId:"1:151716688191:web:ddde7412906606172ce38a"
});

var db = firebaseApp.firestore();

firebase.firestore().settings({ experimentalForceLongPolling: true, merge:true });

export { db };