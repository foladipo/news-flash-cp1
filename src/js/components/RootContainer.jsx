import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePageContainer from './HomePageContainer';
import DashboardContainer from './DashboardContainer';
import NotFound from './NotFound';
import AuthenticatedRoute from './AuthenticatedRoute';

/**
 * This Component is the instance of BrowerRouter that is used to route
 * all the requests to paths in this single page app.
 * @return {ReactComponent|null|false} - A Component for DOM rendering.
 * Otherwise, return null or false to prevent the rendering of this Component.
 */
export default function RootComponent() {
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
