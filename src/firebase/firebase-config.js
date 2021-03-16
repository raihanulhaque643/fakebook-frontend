import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyApQlsN-3i6MkYyTqCPFMFkRJsqXUoBQiM",
    authDomain: "fakebook-images.firebaseapp.com",
    projectId: "fakebook-images",
    storageBucket: "fakebook-images.appspot.com",
    messagingSenderId: "224313676506",
    appId: "1:224313676506:web:ca6bbfcfc406f450fa8be3",
    measurementId: "G-HEHVEQF75H"
  };

  firebase.initializeApp(firebaseConfig);

  export var storage = firebase.storage();
  // Create a storage reference from our storage service
  export var storageRef = storage.ref();
  