import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import firebase from "firebase";
import "firebase/firestore";

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyADNrBg-DFovl2Q9GyF-GpQHAyiBwtwYKE",
  authDomain: "womanup-filin.firebaseapp.com",
  projectId: "womanup-filin",
  storageBucket: "womanup-filin.appspot.com",
  messagingSenderId: "564836920592",
  appId: "1:564836920592:web:ef58aae6e3aaae67714995",
  measurementId: "G-EW49QY5Z92",
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
