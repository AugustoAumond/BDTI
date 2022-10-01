import React from 'react'
import ReactDOM from 'react-dom/client'
import MainRoutes from './Routes';
import {Provider} from 'react-redux';
import store from './../redux/store/index';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <MainRoutes />
    </Provider>
  </React.StrictMode>
)
