import * as React from 'react';
import './App.css';

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp = {
  apiKey: "AIzaSyAB4PpGX2y9eOpD0Z-UGfXDpJ4ZCEN9Uuw",
  authDomain: "adi-notes-3d984.firebaseapp.com",
  projectId: "adi-notes-3d984",
  storageBucket: "adi-notes-3d984.appspot.com",
  messagingSenderId: "1049074837941",
  appId: "1:1049074837941:web:2369ec17c3ea9065af51fc",
  measurementId: "G-J4RTEWK9SH"
};

const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {
  const [user] = useAuthState(auth);
  return (
   "Hello"
  );
}

export default App;
