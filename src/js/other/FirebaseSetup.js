// Assumes the Firebase client and its desired features have been loaded.
// Only the Firebase features needed at the moment are included.
const firebase = require('firebase');

exports.initFirebase = () => {
  console.log('called');
  // const config = {
  //   apiKey: "AIzaSyDTLsprvv9GcYCmMHygGph-fXsA1BvEwF4",
  //   authDomain: "document-tracker-cohort-20.firebaseapp.com",
  //   databaseURL: "https://document-tracker-cohort-20.firebaseio.com",
  //   projectId: "document-tracker-cohort-20",
  //   storageBucket: "document-tracker-cohort-20.appspot.com",
  //   messagingSenderId: "409648985148"
  // };
  const config = {
      apiKey: 'AIzaSyCYUbZwe5kniitccbY06AWMMMu3oKEAOMw',
      authDomain: "news-flash-cp1.firebaseapp.com",
      databaseURL: "https://news-flash-cp1.firebaseio.com",
      projectId: "news-flash-cp1"
  };
  firebase.initializeApp(config);
  return firebase;
}
