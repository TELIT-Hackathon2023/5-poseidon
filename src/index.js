import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import store from './store/store';
import { setIsAuthenticated } from './store/autentificateSlice';

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';

const authToken = localStorage.getItem('authToken');
store.dispatch(setIsAuthenticated(!!authToken));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

