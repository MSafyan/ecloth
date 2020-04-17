import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCt_g-GTWa0tOy17JD_RgA5Vu6C76NBXAs',
  authDomain: 'crw-db-5299d.firebaseapp.com',
  databaseURL: 'https://crw-db-5299d.firebaseio.com',
  projectId: 'crw-db-5299d',
  storageBucket: 'crw-db-5299d.appspot.com',
  messagingSenderId: '329145569215',
  appId: '1:329145569215:web:958d3a750160e51aa0db0a',
  measurementId: 'G-CY7FR9GKP9'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log(error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
