import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { UrlContextProvider } from './context/UrlContext';
import { InfoUserContextProvider } from './context/InfoUserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UrlContextProvider>
      <InfoUserContextProvider>
        <App />
      </InfoUserContextProvider>
    </UrlContextProvider>
  </React.StrictMode>
);
