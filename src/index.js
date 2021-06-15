import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import CartProvider from './providers/cart/cart.provider';

import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
      <CartProvider>
        <BrowserRouter> {/* This component give the application inside it's scope [Here <App/>] all the routing functionality  */}
          <App />
        </BrowserRouter>
      </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);