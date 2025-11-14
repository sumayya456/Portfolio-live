import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import "./index.css";

// CRITICAL FIX: Ensure the global base.css file is imported FIRST
import './styles/base.css'; 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);