import React from 'react';
import ReactDOM from 'react-dom';
import RootContainer from './components/RootContainer';

// Styles and JS code for the rendered document.

// eslint-disable-next-line no-unused-vars
import mainStyles from '../css/style.scss';

// eslint-disable-next-line no-unused-vars
import * as homePage from './util/homePage';

// eslint-disable-next-line no-unused-vars
import * as dashboard from './util/dashboard';

ReactDOM.render(<RootContainer />, document.getElementById('root-container'));
