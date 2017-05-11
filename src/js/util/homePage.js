import firebase from 'firebase';
import getFirebaseApp from '../util/getFirebaseApp';

if (window.location.pathname === '/') {
  document.onreadystatechange = () => {
    if (document.readyState === 'interactive') {
      const firebaseApp = getFirebaseApp();
      const firebaseUi = new firebaseui.auth.AuthUI(firebaseApp.auth());
      firebaseApp.auth().onAuthStateChanged((user) => {
        if (user) {
          user.getToken()
            .then((idToken) => {
              document.cookie = `idToken=${idToken}`;
              window.location.replace('/dashboard');
            })
            .catch(() => {
              document.cookie = 'idToken=null';
              firebaseApp.auth().signOut();
            });
        } else {
          document.cookie = 'idToken=null';

          const firebaseUiConfig = {
            // Prevent Firebase Ui from redirecting upon a successful login.
            callbacks: {
              signInSuccess: () => false,
            },
            signInOptions: [
              firebase.auth.GoogleAuthProvider.PROVIDER_ID,
              firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            ],
          };

          firebaseUi.start('#firebaseui-auth-container', firebaseUiConfig);
        }
      });
    }
  };
}
