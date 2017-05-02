import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import firebase from 'firebase';
import dotenv from 'dotenv';
import HomePageContainer from './HomePageContainer';
import DashboardContainer from './DashboardContainer';
import NotFoundContainer from './NotFoundContainer';
import getFirebaseApp from '../other/getFirebaseApp';

dotenv.config();
const firebaseApp = getFirebaseApp();

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
  const isLoggedIn = firebaseApp.auth().currentUser;
  if (isLoggedIn) {
    return <props.component />;
  }
  return <Redirect to="/" />;
}

export default RoutingComponent;
