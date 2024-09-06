import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App'; 
import '../src/Styles/style.css'; 

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
