if (window.location.pathname === '/') {
  document.onreadystatechange = () => {
    if (document.readyState === 'interactive') {
      // initFirebase() is defined in initFirebase.js and imported with header.ejs.
      const firebase = initFirebase();

      // Initialize the FirebaseUI Widget using Firebase.
      const firebaseUi = new firebaseui.auth.AuthUI(firebase.auth());
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // TODO: Show a loading image while this Promise is being executed, and
          // hide it in then() or catch().
          user.getToken()
            .then((idToken) => {
              // Set a cookie about the sign in status that will be read by the server.
              document.cookie = `idToken=${idToken}`;

              // TODO: Redirect the user to a) the dashboard or b) where he/she was
              // going before.
              window.location.replace('/dashboard');
            })
            .catch((error) => {
              // Make the user sign in again.
              // TODO: Show the user an error message.
              document.cookie = 'idToken=null';
              firebase.auth().signOut();
            });
        } else {
          document.cookie = 'idToken=null';

          const firebaseUiConfig = {
            // Prevent Firebase Ui from redirecting upon a successful login as there's some
            // code in this script that has Promise's that must be waited on to finish.
            callbacks: {
              signInSuccess: () => false,
            },
            signInOptions: [
              firebase.auth.GoogleAuthProvider.PROVIDER_ID,
              firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            ],
          };

          // The start method will wait until the DOM is loaded.
          firebaseUi.start('#firebaseui-auth-container', firebaseUiConfig);
        }
      });
    }
  };
}
