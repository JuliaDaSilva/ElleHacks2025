//This file is responsible for rendering the React App into the DOM
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';                // General styling for the app
import App from './App';             // Import the main App component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

