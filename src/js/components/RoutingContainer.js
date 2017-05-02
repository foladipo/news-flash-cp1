import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import firebase from 'firebase';
import dotenv from 'dotenv';
import HomePageContainer from './HomePageContainer';
import DashboardContainer from './DashboardContainer';
import NotFoundContainer from './NotFoundContainer';
import getFirebaseApp from '../other/getFirebaseApp';

dotenv.config();

function RoutingComponent() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <AuthenticatedRoute exact path="/dashboard" component={DashboardContainer} />
        <AuthenticatedRoute exact path="*" component={NotFoundContainer} />
      </Switch>
    </BrowserRouter>
  );
}

function AuthenticatedRoute(props) {
  // Cookie-extraction regex courtesey of MDN (https://goo.gl/pLHkdj).
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)idToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  if (token !== '' && token !== 'null') {
    return <props.component />;
  }

  window.location.replace('/');
}

export default RoutingComponent;
