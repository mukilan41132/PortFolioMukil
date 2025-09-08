import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import AppProvider from './Context/AppProvider';
import { Provider } from 'react-redux';
import { store } from './store';

// Get root element
const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);

// Render the app
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppProvider>
        <App />
      </AppProvider>
    </Provider>
  </React.StrictMode>
);
