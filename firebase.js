import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDQGMPxPlAUFE6HmmrrGVWu82SlICfWHFI",
  authDomain: "instagram-clone-3b67e.firebaseapp.com",
  projectId: "instagram-clone-3b67e",
  storageBucket: "instagram-clone-3b67e.appspot.com",
  messagingSenderId: "121966265522",
  appId: "1:121966265522:web:6dc78bfbcb4a1db61475ab",
  measurementId: "G-K4HG6JVPTZ",
};

// Initialize Firebase
!firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.apps();

const db = firebase.firestore();
export { firebase, db };
