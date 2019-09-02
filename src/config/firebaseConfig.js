import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var fbconfig = {
    apiKey: "AIzaSyBD9rqi_rxMWmZHXdNmBENMad23lzenIoo",
    authDomain: "fir-2-60320.firebaseapp.com",
    databaseURL: "https://fir-2-60320.firebaseio.com",
    projectId: "fir-2-60320",
    storageBucket: "",
    messagingSenderId: "702489221967",
    appId: "1:702489221967:web:1c31743eb8d64c28"
  };

  firebase.initializeApp(fbconfig);
  //firebase.firestore.settings({timestampsInSnapshots: true})

  export default firebase