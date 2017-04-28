import React from 'react';
import FetchArticlesFormContainer from './FetchArticlesFormContainer';

export default class NavContainer extends React.Component {
  render() {
    return (
      <div id='nav-container' className='row'>
        <div id='nav-controls' className='col-md-12'>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <ul className="nav navbar-nav navbar-left"></ul>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <button id="sign-out-btn" className="btn btn-info navbar-btn">Sign out</button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <FetchArticlesFormContainer />        
      </div>
    );
  }
}
