
import React from 'react';
import web from './webphotos/ashutosh.png';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <> 
     <div className="footer-container">
        {/* <div className="waves">
            <div className="wave" id="wave1"></div>
            <div className="wave" id="wave2"></div>
            <div className="wave" id="wave3"></div>
            <div className="wave" id="wave4"></div>
        </div> */}
    
        <div className="footer-logo">
            <img src={web} alt="" style={{ height: '60px', width: '60px' ,}}/>
        </div>
    
    <ul className="menu">
        <li><Link to="/"  className="footer-nav-link">Home</Link></li>
        <li><Link to="/about"  className="footer-nav-link">About</Link></li>
        <li><Link to="/contact"  className="footer-nav-link">Contact</Link></li>
        <li><Link to="/gallery"  className="footer-nav-link">Gallery</Link></li>
        <li><Link to="/"  className="footer-nav-link">FAQ's</Link></li>
        <li><Link to="/policy"  className="footer-nav-link">Privacy Policy</Link></li>
    </ul>
            <p className="footer-statement">&copy; 2023 Ashutosh Enterprise | All Rights Reserved</p>
     </div>
    </>
  );
};

export default Footer;