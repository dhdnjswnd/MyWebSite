import React, {useEffect} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './HomePage';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import * as process from "process";
import {createGlobalStyle} from 'styled-components';
import { HelmetProvider, Helmet } from "react-helmet-async"; // 이부분 추가


const TITLE = "OTHEBELL";
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


const GlobalStyles = createGlobalStyle`
  html {
    --color-primary-theme: rgb(255, 212, 0);
    --color-blue-theme: rgb(0, 121, 255);
    --color-green-theme: rgb(100, 255, 100);
  }`


root.render(
    <React.StrictMode>
        <HelmetProvider>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <GlobalStyles/>
            <Router basename={process.env.PUBLIC_URL}>
                <HomePage/>
            </Router>
        </HelmetProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
