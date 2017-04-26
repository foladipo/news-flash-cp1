import React from 'react';

export default class AppStatusContainer extends React.Component {
  render() {
    return (
      <div id='app-status-container' className='hidden'>
        <img src='/img/loading-img.png' id='loading-articles' className='img-responsive center-block'/>
        <img src='/img/error-loading-img.png' id='error-loading-articles' className='img-responsive center-block hidden'/>
        <h3></h3>
      </div>
    );
  }
}
