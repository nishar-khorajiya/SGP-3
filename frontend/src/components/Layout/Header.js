import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import web from './webphotos/ashutosh.png';
import { useAuth } from '../../pages/auth/AuthContext'; // Import useAuth from AuthContext

const Header = () => {
  const { user, logout } = useAuth(); // Use useAuth to access authentication context
  const navigate = useNavigate(); // Use useNavigate for programmatic navigation

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Determine the CSS classes based on user login status
  const navbarClasses = user ? 'navbar navbar-expand-lg bg-body-tertiary logged-in' : 'navbar navbar-expand-lg bg-body-tertiary logged-out';
  const brandClasses = user ? 'navbar-brand logged-in' : 'navbar-brand logged-out';

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
              {user ? (
                <>
                  <li className="nav-item">
                    <span className="nav-link">
                      Welcome, {user.name} {/* Display the user's name */}
                    </span>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link btn btn-link"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link">
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  </li>
                </>
              )}
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
