import React from 'react';
import ReactDOM from 'react-dom';

// Custom styles.
import SiteWideStyles from '../css/siteWide.scss';

// Add custom scripts that aren't relevant to React or the Flux pattern.
import FirebaseSetup from './other/FirebaseSetup';
const initFirebase = FirebaseSetup.initFirebase;
// Expose this method as a global method.
window.initFirebase = initFirebase;
