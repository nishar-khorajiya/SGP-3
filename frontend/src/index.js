import React from 'react';
// import 'antd/dist/reset.css'
import './index.css';
import App from './App'; // Import the App component
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from './Context/auth';
import { CartProvider } from './Context/cartContext';

const root = createRoot(document.getElementById('root'));

root.render(
  <AuthProvider>
    <CartProvider>
  {/* <React.StrictMode> */}
    <App />
  {/* </React.StrictMode> */}
  </CartProvider>
  </AuthProvider>
);

reportWebVitals();




