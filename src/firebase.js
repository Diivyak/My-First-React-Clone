import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBNC9D1OYoU0b0Dy4Us3TiKKa-NTwWlODM",
  authDomain: "clone-547d4.firebaseapp.com",
  databaseURL: "https://clone-547d4.firebaseio.com",
  projectId: "clone-547d4",
  storageBucket: "clone-547d4.appspot.com",
  messagingSenderId: "862205506055",
  appId: "1:862205506055:web:56cc0beb483d107c4470a2",
  measurementId: "G-1T9LHKNW16",
};
//Initailize app
const firebaseApp = firebase.initializeApp(firebaseConfig);
//Initialize DB
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
