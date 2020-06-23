import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBxN-5Iu1JRDz22BMnD_3vWTsN8DJUwm1g',
  authDomain: 'crow-db-c8acb.firebaseapp.com',
  databaseURL: 'https://crow-db-c8acb.firebaseio.com',
  projectId: 'crow-db-c8acb',
  storageBucket: 'crow-db-c8acb.appspot.com',
  messagingSenderId: '474256784076',
  appId: '1:474256784076:web:41f2b21ce52077e04ca069',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
