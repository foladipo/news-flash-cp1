import firebase from 'firebase';
import dotenv from 'dotenv';

dotenv.config();

export default function getFirebaseApp() {
  let firebaseApp = {};
  try {
    firebaseApp = firebase.app();
  } catch (error) {
    const firebaseConfig = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DB_URL,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      projectId: process.env.FIREBASE_PROJECT_ID,
    };
    firebaseApp = firebase.initializeApp(firebaseConfig);
  }

  return firebaseApp;
}
