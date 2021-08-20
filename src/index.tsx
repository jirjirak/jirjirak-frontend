// i18n
import 'locales/i18n';
// styles
import './index.css';

// context
import { GlobalProvider } from 'context/GlobalContext';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// stores
import store from 'stores';

// components
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
