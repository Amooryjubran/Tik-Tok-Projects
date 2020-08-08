import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBlCnjfwrCFtdv-ZqnoDuJC6Sxf9fFypAo",
  authDomain: "tik-tok-d664c.firebaseapp.com",
  databaseURL: "https://tik-tok-d664c.firebaseio.com",
  projectId: "tik-tok-d664c",
  storageBucket: "tik-tok-d664c.appspot.com",
  messagingSenderId: "654214949415",
  appId: "1:654214949415:web:2a17a238df348c2b247c02",
  measurementId: "G-S6JG41NSHE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;