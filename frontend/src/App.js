import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StatesProvider from './Context/StatesProvider';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Pagenotfound from './pages/Pagenotfound';
import Gallery from './pages/gallery';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Cement from './pages/cement';
import Paint from './pages/paint';
import Industry from './pages/industry';
// import { AuthProvider } from './pages/auth/AuthContext';

function App() {
  return (
    <>
    <StatesProvider>
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/*" element={<Pagenotfound />} />
          <Route path="/cement" element={<Cement />} />
          <Route path="/paint" element={<Paint />} />
          <Route path="/industry" element={<Industry />} />
        </Routes>
    </Router>
    </StatesProvider>
    </>
  );
}

export default App;
