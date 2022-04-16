import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';

window.$ = require('jquery');
window.isource = 'http://isource.wearslot.now/images/';
axios.defaults.baseURL = "http://wearslot.now/api";
axios.defaults.headers.common = {
  Authorization: "Bearer " + localStorage.getItem("token"),
  Accept: "application/json",
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("app")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
