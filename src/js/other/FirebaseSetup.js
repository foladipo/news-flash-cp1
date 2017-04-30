// Assumes the Firebase client and its desired features have been loaded.
// Only the Firebase features needed at the moment are included.
const firebase = require('firebase');

exports.initFirebase = () => {
  const config = {
    apiKey: 'AIzaSyCYUbZwe5kniitccbY06AWMMMu3oKEAOMw',
    authDomain: 'news-flash-cp1.firebaseapp.com',
    databaseURL: 'https://news-flash-cp1.firebaseio.com',
    projectId: 'news-flash-cp1',
  };
  firebase.initializeApp(config);
  return firebase;
};
