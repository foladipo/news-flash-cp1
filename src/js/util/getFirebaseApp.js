import firebaseCore from 'firebase/app';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Return the existing Firebase app for this project, or instantiate
 * a new one if none existed before.
 * @return - A Firebase app, of type firebaseCore.app.App.
 */
export default function getFirebaseApp() {
  let firebaseApp = {};

  try {
    firebaseApp = firebaseCore.app();
  } catch (error) {
    const firebaseConfig = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DB_URL,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      projectId: process.env.FIREBASE_PROJECT_ID,
    };
    firebaseApp = firebaseCore.initializeApp(firebaseConfig);
  }

  return firebaseApp;
}
