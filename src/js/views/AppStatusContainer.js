import React from 'react';

export default class AppStatusContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      htmlClasses: ['row']
    };
  }

  render() {
    const currentHtmlClasses = this.state.htmlClasses.join(' ');
    return (
      <div className={currentHtmlClasses}>
        <img src='/img/welcome-img.png' className='img-responsive center-block'/>
        <h1 className='display-4 text-center bg-light-blue'>Welcome to your dashboard</h1>
        <p className='lead text-center'>To read news articles from your desired source, please use the form in the navigation bar.</p>
      </div>
    );
  }
}
