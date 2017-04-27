import React from 'react';
import FetchArticlesFormContainer from './FetchArticlesFormContainer';

export default class NavContainer extends React.Component {
  render() {
    return (
      <div id='nav-container' className='row'>
        <div id='nav-controls' className='col-md-6'>

        </div>
        <FetchArticlesFormContainer />        
      </div>
    );
  }
}
