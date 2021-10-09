import { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyB0C0ideH6sRztfydkcVI_dWDsKBc_4MOw",
    authDomain: "mrdark-chat.firebaseapp.com",
    projectId: "mrdark-chat",
    storageBucket: "mrdark-chat.appspot.com",
    messagingSenderId: "175355331631",
    appId: "1:175355331631:web:0c18e33eb1b3d5d48c72da",
    measurementId: "G-EZZDX9K9MM"
  });

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <Context.Provider value={{ firestore, auth, firebase }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);