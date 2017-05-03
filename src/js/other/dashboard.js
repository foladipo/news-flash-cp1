import getFirebaseApp from './getFirebaseApp';

if (window.location.pathname === '/dashboard') {
  document.onreadystatechange = () => {
    if (document.readyState === 'interactive') {
      const firebaseApp = getFirebaseApp();

      const signOutBtn = document.getElementById('sign-out-btn');
      signOutBtn.onclick = (e) => {
        e.preventDefault();
        firebaseApp.auth().signOut();
        document.cookie = 'idToken=null';
        window.location.replace('/');
      };
    }
  };
}
