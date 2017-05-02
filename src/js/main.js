import React from 'react';
import ReactDOM from 'react-dom';
import RoutingContainer from './components/RoutingContainer';

// Custom styles.
import mainStyles from '../css/style.scss';
import * as homePage from './other/homePage';
import * as utilityFunctions from './other/utilityFunctions';

ReactDOM.render(<RoutingContainer />, document.getElementById('routing-container'));
