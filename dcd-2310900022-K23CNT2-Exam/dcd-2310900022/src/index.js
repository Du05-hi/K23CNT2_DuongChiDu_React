import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DcdApp from './DcdApp';
import reportWebVitals from './reportWebVitals';

const dcdRoot = ReactDOM.createRoot(document.getElementById('dcdRoot'));
dcdRoot.render(
  <React.StrictMode>
    <DcdApp/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
