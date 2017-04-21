if (window.location.pathname !== '/') {
  document.onreadystatechange = () => {
    if (document.readyState === 'interactive') {
      const firebase = initFirebase();
      
      const signOutBtn = document.getElementById('sign-out-btn');
      signOutBtn.onclick = e => {
        e.preventDefault();
        firebase.auth().signOut();
        document.cookie = 'idToken=null';
        window.location.replace('/');
      };
    }
  };
}
