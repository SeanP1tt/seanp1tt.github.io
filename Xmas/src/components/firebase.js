import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCeL7EBGoUNEAWTbbub4X2JCJmqb7ay5wM",
   authDomain: "xmas-59b50.firebaseapp.com",
   databaseURL: "https://xmas-59b50.firebaseio.com/",
   projectId: "xmas-59b50",
   storageBucket: "xmas-59b50.appspot.com",
   messagingSenderId: "375124344453"
 };
 firebase.initializeApp(config);

 export default firebase;