import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './store.js'

import RoutesTree from './components/RoutesTree'
import App from './App'

import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RoutesTree/>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
