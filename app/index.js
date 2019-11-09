import React from 'react';
import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import { configureStore, history } from './store/configureStore';
import './app.global.css';
import App from './components/App';

const store = configureStore();

render(
  <App store={store} history={history} />,
  document.getElementById('root'),
);
