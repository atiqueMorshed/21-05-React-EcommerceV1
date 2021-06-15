import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';


import {Provider} from 'react-redux';
import {store, persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';

import CartProvider from './providers/cart/cart.provider';

import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CartProvider>
        <BrowserRouter> {/* This component give the application inside it's scope [Here <App/>] all the routing functionality  */}
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </BrowserRouter>
      </CartProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);