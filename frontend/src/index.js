import React from 'react';
// import 'antd/dist/reset.css'
import './index.css';
import App from './App'; // Import the App component
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from './Context/auth';

const root = createRoot(document.getElementById('root'));

root.render(
  <AuthProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </AuthProvider>
);

reportWebVitals();




