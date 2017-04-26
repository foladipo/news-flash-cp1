import React from 'react';
import WelcomeMessageContainerStore from '../stores/WelcomeMessageContainerStore';

export default class WelcomeMessageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      htmlClasses: ['row']
    };
  }

  componentWillMount() {
    WelcomeMessageContainerStore.on('loadArticles', () => {
      this.setState({
        htmlClasses: WelcomeMessageContainerStore.htmlClasses
      });
    });
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
