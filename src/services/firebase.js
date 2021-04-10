import { firebase } from '@firebase/app';
import '@firebase/firestore'
import '@firebase/auth';

var firebaseConfig = {
    //FireBase config is here...
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

export { firebase, db, auth }