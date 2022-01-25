import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyAVio7xRlfN8PVZsRWfpJuDAX1fcmDAPFA",
  authDomain: "project-58-b4938.firebaseapp.com",
  databaseURL: "https://project-58-b4938-default-rtdb.firebaseio.com",
  projectId: "project-58-b4938",
  storageBucket: "project-58-b4938.appspot.com",
  messagingSenderId: "654545570896",
  appId: "1:654545570896:web:4f75ceef06ba1012fd1555"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();