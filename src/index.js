import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import * as cookie from "./utils/cookie";
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

window.addEventListener("load", () => {
    let lang = cookie.getCookie("lang");
    let theme = cookie.getCookie("theme");
    if (lang === undefined) {
        cookie.setCookie("lang", "fr");
    }
    if (theme === undefined) {
        cookie.setCookie("theme", "light");
    }
    document.getElementsByTagName("body")[0].setAttribute("data-theme", cookie.getCookie("theme"));
})


reportWebVitals();
