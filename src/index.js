import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './globalStyle';
import App from './App';
import Routes from './routes'; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <Routes />
      <GlobalStyle></GlobalStyle>
    </>
  </React.StrictMode>
);


