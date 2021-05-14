import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> {/* This component give the application inside it's scope [Here <App/>] all the routing functionality  */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);