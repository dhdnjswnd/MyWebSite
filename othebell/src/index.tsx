import React, {Component, FunctionComponent, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './HomePage';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import * as process from "process";
import {createGlobalStyle} from 'styled-components';
import {HelmetProvider, Helmet} from "react-helmet-async";
import DeveloperContainer from "./Developer/Developer";
import MusicianContainer from "./Musician/Musician";
import OtherContainer from "./Other/Other"; // 이부분 추가


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


// @ts-ignore
root.render(
    <React.StrictMode>
        <HelmetProvider>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <GlobalStyles/>
        </HelmetProvider>
        {/* 홈화면 */}
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                {/* Home */}
                <Route path='/' element={<HomePage/>}/>
                {/* Home */}
                <Route path='/home' element={<HomePage/>}/>
                {/* 개발자 원종의 공간 */}
                <Route path='/developer' element={<DeveloperContainer/>}/>
                {/* 음악가 원종의 공간 */}
                <Route path='/musician' element={<MusicianContainer/>}/>
                {/* 기타 원종의 공간 */}
                <Route path='/other' element={<OtherContainer/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

