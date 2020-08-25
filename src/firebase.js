import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyASwr1vWGO8ZzLpZ9eb3hGIy0MObvYB1qc",
  authDomain: "tinder-clone-63b29.firebaseapp.com",
  databaseURL: "https://tinder-clone-63b29.firebaseio.com",
  projectId: "tinder-clone-63b29",
  storageBucket: "tinder-clone-63b29.appspot.com",
  messagingSenderId: "154630117172",
  appId: "1:154630117172:web:87c81beca8065262e37761",
  measurementId: "G-R6CZJXFQ8M"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Database
const database = firebaseApp.firestore();

export default database;
