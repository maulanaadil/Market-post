import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import App from './App';
import './index.scss';
import "react-toastify/dist/ReactToastify.min.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ToastContainer position={'bottom-left'} />
  </React.StrictMode>
);
