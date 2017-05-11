import React from 'react';
import ArticlesContainer from './ArticlesContainer';
import FooterContainer from './FooterContainer';
import NavContainer from './NavContainer';

/**
 * This Component contains the principal components that make up the structure
 * of the dashboard: a nav bar, a container for Articles and a footer.
 * @return - HTML representation of this Component for DOM rendering.
 */
export default function DashboardAppContainer() {
  return (
    <div id="app-container" className="col-lg-8 col-md-10 col-sm-12">
      <NavContainer />
      <ArticlesContainer />
      <FooterContainer />
    </div>
  );
}
