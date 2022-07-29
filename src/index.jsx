import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import InputWithName from './inputWithName';
import Buttons from './buttons';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode> hace que en entorno de desarrollo se muestren warnings de react
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/input" element={<InputWithName />} />
      <Route path="/buttons" element={<Buttons />} />
    </Routes>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
