import React from 'react';

export default class FooterContainer extends React.Component {
  render() {
    return (
      <div id='footer-container' className='row'>
        <div>
          <h5 className='text-center'>&copy; {new Date().getFullYear()}. All rights&nbsp;
            reserved. Created with &#10084; by&nbsp;
            <a href='https://google.com/search/Folusho+Oladipo'>Folusho Oladipo</a> using&nbsp;
            <a href='https://facebook.github.io/react/'>React</a> and&nbsp;
            the <a href='https://newsapi.org/'>NewsAPI</a>.
          </h5>
        </div>
      </div>
    );
  }
}
