import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import web from './webphotos/ashutosh.png';
import { useAuth } from '../../pages/auth/AuthContext'; // Import useAuth from AuthContext

const Header = () => {
  // const { user, logout } = useAuth(); // Use useAuth to access authentication context
  const history = useNavigate(); // Use useNavigate for programmatic navigation

  const handleLogout = () => {

    localStorage.removeItem('token')
    localStorage.removeItem('name')
    history('login')
  }

  const getName = () => {
    var fullName = localStorage.getItem('name');
    if(fullName){
    var firstNameMatch = fullName.match(/^\w+/);
    }
    if (firstNameMatch) {
      return firstNameMatch[0];
    }
  }

  // Determine the CSS classes based on user login status
  const navbarClasses = localStorage.getItem('token') ? 'navbar navbar-expand-lg bg-body-tertiary logged-in' : 'navbar navbar-expand-lg bg-body-tertiary logged-out';
  const brandClasses = localStorage.getItem('token') ? 'navbar-brand logged-in' : 'navbar-brand logged-out';

  return (
    <>
      <nav className={navbarClasses}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className={brandClasses}>
              <img
                src={web}
                alt=""
                style={{
                  height: "50px",
                  width: "50px",
                  borderRadius: "60%",
                }}
              />
              Ashutosh Enterprise
            </Link>

            <ul className="nav nav-pills ml-auto" style={{ paddingLeft: "350px" }}>
              <li className="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page">
                  Home
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <NavLink
                  to="/category"
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to="/cement" className="dropdown-item">
                      Cements
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/colours" className="dropdown-item">
                      Colours
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink to="/more" className="dropdown-item">
                      More
                    </NavLink>
                  </li>
                </ul>
              </li>
              {!localStorage.getItem('token') ?
                <form className="d-flex">
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link">Register</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">Login</NavLink>
                  </li></form> :
                <div style={{ color: 'blue' }}>
                  <label className='mx-2 my-2'>{"Welcome,"+getName()}</label>
                  <button className='btn btn-primary' onClick={handleLogout}>Logout</button></div>}
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link">
                  Cart (0)
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
