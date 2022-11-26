// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
// Your web app's Firebase configuration

import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDmoEwjfEj_9K8TIixuvRHmsp1iaJDoPKc",
  authDomain: "reels-e2489.firebaseapp.com",
  projectId: "reels-e2489",
  storageBucket: "reels-e2489.appspot.com",
  messagingSenderId: "692899460898",
  appId: "1:692899460898:web:5e6ff9f427d870c407d77b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()

const firestore = firebase.firestore()

export const database = {
  users : firestore.collection('users'),
  posts : firestore.collection('posts'),
  comments : firestore.collection('comments'),
  getTimestamp : firebase.firestore.FieldValue.serverTimestamp
}

export const storage = firebase.storage()
