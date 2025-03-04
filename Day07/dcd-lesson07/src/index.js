import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import DcdApp from './DcdApp';
import DcdRenderListIphone from './components/DcdRenderListIphone';

const DcdRoot = ReactDOM.createRoot(document.getElementById('DcdRoot'));
DcdRoot.render(
<React.StrictMode>
  <DcdApp/>

</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
