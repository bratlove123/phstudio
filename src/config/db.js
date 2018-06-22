import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyDwn1l7SVLYKU9vcREGrdV1vlJpneWBSxg",
    authDomain: "binlogin-50bfd.firebaseapp.com",
    databaseURL: "https://binlogin-50bfd.firebaseio.com",
    projectId: "binlogin-50bfd",
    storageBucket: "",
    messagingSenderId: "21696425374"
  };
let appFirebaseConfig = firebase.initializeApp(config);
export const db = appFirebaseConfig.database();
export const projectsRef = db.ref("projects");
export default appFirebaseConfig;