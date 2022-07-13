import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyAx6TpM3gakVjZDpiOKLq0KzYSO2Hyix14",
    authDomain: "getmovies-6ccfc.firebaseapp.com",
    projectId: "getmovies-6ccfc",
    storageBucket: "getmovies-6ccfc.appspot.com",
    messagingSenderId: "992511540561",
    appId: "1:992511540561:web:5dcd15240cbd7c6bc9a770",
    measurementId: "G-F6VYM8FEH6"
}

firebase.initializeApp(firebaseConfig)

const firestore = firebase.firestore()

export { firestore }