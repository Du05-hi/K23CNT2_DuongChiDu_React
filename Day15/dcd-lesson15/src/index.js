import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import DcdApp from './DcdApp';

const dcd_root = ReactDOM.createRoot(document.getElementById('dcd_root'));
dcd_root.render(
  <React.StrictMode>
    <DcdApp/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
