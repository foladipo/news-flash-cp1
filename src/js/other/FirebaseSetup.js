// Assumes the Firebase client and its desired features have been loaded.
// Only the Firebase features needed at the moment are included.
const firebase = require('firebase');
const dotenv = require('dotenv');
dotenv.config();

exports.initFirebase = () => {
  const config = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: "news-flash-cp1.firebaseapp.com",
      databaseURL: "https://news-flash-cp1.firebaseio.com",
      projectId: "news-flash-cp1"
  };
  firebase.initializeApp(config);
  return firebase;
}
