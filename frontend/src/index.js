// // React Router DOM is a popular library used for handling routing in React applications. It provides a set of components and utilities that make it easy to create navigation and routing features for single-page applications (SPAs).
// //see in chatgpt 
import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // Import the App component
import reportWebVitals from './reportWebVitals';


import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();




