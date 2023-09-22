import React from 'react';
import web from './webphotos/ashutosh.png';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <> 
<div className="container d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p className="col-md-4 mb-0 text-body-secondary">&copy; 2023 Ashutosh Enterprise</p>

    <Link to="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <img src={web} alt="" style={{ height: '60px', width: '60px' ,}}/>
    </Link>

    <ul className="nav col-md-8 justify-content-end foot">
      <li className="nav-item"><Link to="/"  className="nav-link px-2 text-body-secondary">Home</Link></li>
      <li className="nav-item"><Link to="/about"  className="nav-link px-2 text-body-secondary">About</Link></li>
      <li className="nav-item"><Link to="/contact"  className="nav-link px-2 text-body-secondary">Contact</Link></li>
      <li className="nav-item"><Link to="/gallery"  className="nav-link px-2 text-body-secondary">Gallery</Link></li>
      <li className="nav-item"><Link to="/"  className="nav-link px-2 text-body-secondary">FAQs</Link></li>
      <li className="nav-item"><Link to="/policy"  className="nav-link px-2 text-body-secondary">Privacy Policy</Link></li>
    </ul>
  </div>
      </>
  );
};

export default Footer;