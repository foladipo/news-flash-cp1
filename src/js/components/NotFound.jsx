import React from 'react';

/**
 * This Component is the '404: Not Found' page and is rendered when a user
 * is logged in and navigates to an undefined Route.
 * @return {ReactComponent|null|false} - A Component for DOM rendering.
 * Otherwise, null or false to not render this Component.
 */
function NotFoundContainer() {
  const goBack = (e) => {
    e.preventDefault();
    window.history.back();
  };

  return (
    <div>
      <div className="col-xs-0 col-md-1" />
      <div className="col-xs-12 col-md-10">
        <div className="full-horizontal-whitespace" />
        <button
          id="go-back-btn"
          onClick={goBack}
          className="btn btn-success btn-lg center-block"
        >
          Go Back
        </button>
        <div className="quarter-horizontal-whitespace" />
        <img className="img-responsive center-block" alt="Page not found. Please go back." src="https://res.cloudinary.com/worldgeek/image/upload/v1493668469/404-page-not-found.jpg" />
      </div>
      <div className="col-xs-0 col-md-1" />
    </div>
  );
}

export default NotFoundContainer;
