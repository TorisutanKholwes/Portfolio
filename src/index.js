import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import * as cookie from "./utils/cookie";
import "./index.scss"
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
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

    const cursor = document.querySelector('#cursor');
    window.onmousemove = (e) => {
        cursor.setAttribute('style', `top: ${e.pageY}px; left: ${e.pageX}px; z-index: 2;`)
    }
    window.onclick = (e) => {
        cursor.classList.add('expand');
        setTimeout(() => {
            cursor.classList.remove('expand');
        }, 500);
    }
})

reportWebVitals();
