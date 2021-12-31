const { initializeApp, }=require("firebase/app");
const { Database }=require("firebase/database");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgcxRu9jyosbCLGnRd3m4ocMoEC3u46dk",
  authDomain: "jojo-571ca.firebaseapp.com",
  databaseURL: "https://jojo-571ca-default-rtdb.firebaseio.com",
  projectId: "jojo-571ca",
  storageBucket: "jojo-571ca.appspot.com",
  messagingSenderId: "234173826264",
  appId: "1:234173826264:web:dbe90074aff737fdcfc3ad",
  measurementId: "G-8KNC66LCTW"
};

// Initialize Firebase
const App=initializeApp(firebaseConfig);

