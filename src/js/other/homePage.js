if (window.location.pathname === '/') {
  document.onreadystatechange = () => {
    if (document.readyState === 'interactive') {
      // initFirebase() is defined in initFirebase.js and imported with header.ejs.
      const firebase = initFirebase();
      firebase.auth().onAuthStateChanged(user => {
        const signInContainer = document.getElementById('sign-in-container');
        const signedInContainer = document.getElementById('signed-in-container');
        
        if (user) {
          // signInContainer.hide();
          // signedInContainer.show();

          // Set a cookie about the sign in status that can only be read by the server.
          document.cookie = 'isSignedIn=true';
        } else {
          // signedInContainer.hide();
          // signInContainer.show();

          document.cookie = 'isSignedIn=false';

          const uiConfig = {
            signInSuccessUrl: `${window.location.origin}/dashboard`,
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
