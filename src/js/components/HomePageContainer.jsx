import React from 'react';

/**
 * This Component contains all the elements that make up the home page
 * of this app. Currently, this includes a FirebaseUI widget, a slider and
 * some text for welcoming a user.
 * @return - HTML representation of this Component for DOM rendering.
 */
export default function HomePageContainer() {
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
