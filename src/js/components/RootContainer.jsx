import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import dotenv from 'dotenv';
import HomePageContainer from './HomePageContainer';
import DashboardContainer from './DashboardContainer';
import NotFound from './NotFound';

dotenv.config();

/**
 * This Component is the instance of BrowerRouter that is used to route
 * all the requests to paths in this single page app.
 * @return {ReactComponent|null|false} - A Component for DOM rendering.
 * Otherwise, null or false to not render this Component.
 */
function RootComponent() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <AuthenticatedRoute exact path="/dashboard" component={DashboardContainer} />
        <AuthenticatedRoute exact path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

/**
 * This Component is a subclass of Route. It contains code for determining
 * whether or not a user is logged in and only allows that user to access
 * his/her desired Route if he/she is logged in.
 * @return {Component|null} - HTML representation of this Component for DOM rendering.
 */
function AuthenticatedRoute(props) {
  // Cookie-extraction regex courtesy of MDN (https://goo.gl/pLHkdj).
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)idToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
  if (token !== '' && token !== 'null') {
    return <props.component />;
  }

  window.location.replace('/');
  return null;
}

export default RootComponent;
