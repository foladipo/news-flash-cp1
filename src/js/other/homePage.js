if (window.location.pathname === '/') {
  document.onreadystatechange = () => {
    if (document.readyState === 'interactive') {
      // initFirebase() is defined in initFirebase.js and imported with header.ejs.
      const firebase = initFirebase();
      firebase.auth().onAuthStateChanged(user => {        
        if (user) {
          // TODO: Show a loading image while this Promise is being executed, and 
          // hide it in then() or catch().
          user.getToken(true)
            .then(function(idToken) {
            // Set a cookie about the sign in status that will be read by the server.
              document.cookie = 'idToken=' + idToken;

              // TODO: Redirect the user to a) the dashboard or b) where he/she was 
              // going before.
              window.location.replace('/');
            })
            .catch(function(error) {
              // Make the user sign in again.
              // TODO: Show the user an error message.
              document.cookie = 'idToken=null';
              firebase.auth().signOut();
          });
        } else {
          document.cookie = 'idToken=null';

          const uiConfig = {
            signInSuccessUrl: window.location.origin,
            signInOptions: [
              firebase.auth.GoogleAuthProvider.PROVIDER_ID,
              firebase.auth.FacebookAuthProvider.PROVIDER_ID
            ]
          };

          // Initialize the FirebaseUI Widget using Firebase.
          const ui = new firebaseui.auth.AuthUI(firebase.auth());
          
          // The start method will wait until the DOM is loaded.
          ui.start('#firebaseui-auth-container', uiConfig);
        }
      });
    }
  };
}
