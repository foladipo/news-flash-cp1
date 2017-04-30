import React from 'react';
import ArticlesContainer from './ArticlesContainer';
import FooterContainer from './FooterContainer';
import NavContainer from './NavContainer';

export default class DashboardAppContainer extends React.Component {
  render() {
    return (
      <div id="app-container" className="col-lg-8 col-md-10 col-sm-12">
        <NavContainer />
        <ArticlesContainer />
        <FooterContainer />
      </div>
    );
  }
}
