import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import reportWebVitals from './reportWebVitals';

import '../public/assets/js/app';
import axios from 'axios';

axios.defaults.baseURL = 'http://wearslot.now/api';
axios.defaults.headers.common = {
  'Authorization': 'Bearer '+ localStorage.getItem('token'),
  'Accept': 'application/json'
};

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('app')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();