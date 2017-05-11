import React from 'react';
import firebase from 'firebase';
import getFirebaseApp from '../util/getFirebaseApp';

/**
 * This Component contains all the elements that make up the home page
 * of this app. Currently, this includes a FirebaseUI widget, a slider and
 * some text for welcoming a user.
 * @return {ReactComponent|null|false} - A Component for DOM rendering.
 * Otherwise, null or false to not render this Component.
 */
export default function HomePageContainer() {
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

  return (
    <div>
      <div className="full-horizontal-whitespace" />
      <h1 className="text-center">Welcome to News Flash</h1>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <h4 className="alert alert-info text-center">
              Please sign in using any of the options below.
            </h4>
            <div id="firebaseui-auth-container" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div id="home-page-slider" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#home-page-slider" data-slide-to="0" className="active" />
                <li data-target="#home-page-slider" data-slide-to="1" />
              </ol>
              <div className="carousel-inner" role="listbox">
                <div className="item active">
                  <img className="d-block img-fluid" src="https://res.cloudinary.com/worldgeek/image/upload/v1493551218/slide1_pao7l8.png" alt="First slide" />
                  <div className="carousel-caption">
                    <h3>The best sources. Worldwide.</h3>
                    <p>Read news from top publishers all around the world</p>
                  </div>
                </div>
                <div className="item">
                  <img className="d-block img-fluid" src="https://res.cloudinary.com/worldgeek/image/upload/v1493551217/slide2_wln6bq.png" alt="Second slide" />
                  <div className="carousel-caption">
                    <h3>Read about anything.</h3>
                    <p>Whatever topics interest you, they are all here.</p>
                  </div>
                </div>
              </div>
              <a className="carousel-control left" href="#home-page-slider" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left" />
              </a>
              <a className="carousel-control right" href="#home-page-slider" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
