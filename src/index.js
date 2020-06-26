import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import AppRoutes from './routes';
import store from './redux/store';

import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
  document.getElementById('root')
);


