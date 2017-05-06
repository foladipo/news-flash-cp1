import React from 'react';
import ReactDOM from 'react-dom';
import RootContainer from './components/RootContainer';

// Custom styles.
import mainStyles from '../css/style.scss';
import * as homePage from './other/homePage';
import * as dashboard from './other/dashboard';

ReactDOM.render(<RootContainer />, document.getElementById('routing-container'));
