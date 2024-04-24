import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { UrlContextProvider } from './context/UrlContext';
import { InfoUserContextProvider } from './context/InfoUserContext';
import { ClickMenuContextProvider } from './context/ClickMenuContext';
import { IdContextProvider } from './context/IdContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UrlContextProvider>
      <InfoUserContextProvider>
        <ClickMenuContextProvider>
          <IdContextProvider>
            <App />
          </IdContextProvider>
        </ClickMenuContextProvider>
      </InfoUserContextProvider>
    </UrlContextProvider>
  </React.StrictMode>
);
