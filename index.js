import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Body from './body';
import Tarjetas from './tarjetas';
import AgregarComentario from './AgregarComentario'
import reportWebVitals from './reportWebVitals';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />

    <Body />
    <Tarjetas />
    <AgregarComentario />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
