import React from 'react';
import ReactDOM from 'react-dom';
import './index.css' // Ensure Tailwind CSS is imported
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';


ReactDOM.render(
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <App />
  </PersistGate>
</Provider>,
document.getElementById('root')
);
