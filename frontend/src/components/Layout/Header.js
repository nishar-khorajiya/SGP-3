import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import web from './webphotos/ashutosh.png';
import { useAuth } from '../../Context/auth';
import useCategory from '../../hooks/useCategory.js';
import { useCart } from "../../Context/cartContext";
import { Badge } from "antd";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();
  const history = useNavigate();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: '',
    });

    localStorage.removeItem('auth');
    history('/');
  };

  const getName = (auth) => {
    if (auth && auth.user && auth.user.name) {
      const fullName = auth.user.name;
      const firstNameMatch = fullName.match(/^\w+/);
      if (firstNameMatch) {
        return firstNameMatch[0];
      }
    }
    return '';
  };

  const isUserLoggedIn = !!auth.token;
  const username = getName(auth);
  const usernameLength = username.length;

  const [activePage, setActivePage] = useState('Category'); // Set the initial value to "Category"

  const handleCategoryPageClick = (page) => {
    setActivePage(page);
  };

  const navbarClasses = `navbar navbar-expand-lg bg-body-tertiary ${
    isUserLoggedIn ? 'logged-in' : 'logged-out'
  } ${usernameLength < 10 ? 'header-short-username' : 'header-long-username'}`;

  const brandClasses = `navbar-brand ${isUserLoggedIn ? 'logged-in' : 'logged-out'}`;

  const [categoryDropdownActive, setCategoryDropdownActive] = useState(false);
  const categoryDropdownRef = useRef(null);

  const toggleCategoryDropdown = () => {
    setCategoryDropdownActive(!categoryDropdownActive);
  };

  const handleCategoryItemSelected = () => {
    setCategoryDropdownActive(false);
  };

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
                style={{ height: '50px', width: '50px', borderRadius: '70%', marginRight: '3px' }}
              />
              Ashutosh Enterprise
            </Link>
            <ul className="nav nav-pills ml-auto" style={{ paddingLeft: '350px' }}>
              <li className="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  to="/categories"
                  className={`nav-link dropdown-toggle`}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {activePage}
                </NavLink>
                <ul className={`dropdown-menu`}>
                  {categories?.map((c) => (
                    <li key={c.slug}>
                      <NavLink
                        to={`/category/${c.slug}`}
                        className="dropdown-item"
                        onClick={() => handleCategoryPageClick(c.name)} // Set the active page
                      >
                        {c.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
              {!auth.user ? (
                <form className="d-flex ms-2">
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
                </form>
              ) : (
                <>
                  <li className="nav-item dropdown ms-2">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{ border: 'none' }}
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to={`/dashboard/${auth?.user?.role === 1 ? 'admin' : 'user'}`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link">
                  Cart<span style={{color:'red'}}>({cart?.length})</span>
                </NavLink>
              </li>
               {/* <li className="nav-item">
                <Badge count={cart?.length} showZero className="nav-link">
                  <NavLink to="/cart" className="nav-link">
                    Cart
                  </NavLink>
                </Badge>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
