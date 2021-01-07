import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsKhRs5aVIjXhQnDAsloRRZ9h8PX9NJAg",
  authDomain: "tutorials-c3d46.firebaseapp.com",
  databaseURL: "https://tutorials-c3d46.firebaseio.com",
  projectId: "tutorials-c3d46",
  storageBucket: "tutorials-c3d46.appspot.com",
  messagingSenderId: "935471881980",
  appId: "1:935471881980:web:3273cbc8ba754513150179",
  measurementId: "G-LEDT8JMYTL",
};

firebase.initializeApp(firebaseConfig);