import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import firebase from 'firebase';
import { firebaseConfig } from './firebase-config.js';

import injectTapEventPlugin from 'react-tap-event-plugin';

import './index.css';
import App from './app';
import Signin from './signin';

firebase.initializeApp(firebaseConfig);
injectTapEventPlugin();
registerServiceWorker();

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    ReactDOM.render(<App />, document.getElementById('root'));
  } else {
    ReactDOM.render(<Signin />, document.getElementById('root'));
  }
});
