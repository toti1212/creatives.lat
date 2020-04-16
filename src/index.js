import './index.scss';

import * as serviceWorker from './serviceWorker';

import { hydrate, render } from 'react-dom';

import AppContainer from './containers/AppContainer.jsx';
import React from 'react';

const rootElement = document.getElementById("root");
const app = (
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>
)

if (rootElement.hasChildNodes()) {
  hydrate(app, rootElement);
} else {
  render(app, rootElement);
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
