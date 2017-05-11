import React from 'react';

/**
 * This Component is a subclass of Route. It contains code for determining
 * whether or not a user is logged in and only allows that user to access
 * his/her desired Route if he/she is logged in.
 * @return {Component|null|false} - HTML representation of this Component for DOM rendering.
 */
export default function AuthenticatedRoute(props) {
  // Cookie-extraction regex courtesy of MDN (https://goo.gl/pLHkdj).
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)idToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
  if (token !== '' && token !== 'null') {
    return <props.component />;
  }

  window.location.replace('/');
  return null;
}
