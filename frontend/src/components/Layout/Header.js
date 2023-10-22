import React,{useState,useRef} from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import web from './webphotos/ashutosh.png';
import { useAuth } from '../../Context/auth';
import useCategory from '../../hooks/useCategory';

const Header = () => {
  const [auth, setAuth] = useAuth();
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

  // Determine the CSS classes based on user login status and username length
  const navbarClasses = `navbar navbar-expand-lg bg-body-tertiary ${isUserLoggedIn ? 'logged-in' : 'logged-out'
    } ${usernameLength < 6 ? 'header-short-username' : 'header-long-username'}`;

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

              {/* <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle  "
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  
                >
                  Categories
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to={"/categories"}>
                      All Categories
                    </NavLink>
                  </li>
                  {categories?.map((c) => (
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li> */}

              <li className="nav-item dropdown ">
                <NavLink
                  to={"/categories"}
                  className={`nav-link dropdown-toggle`}
                  // role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  
                >
                  Category
                </NavLink>
                <ul className={`dropdown-menu `}>
                  {categories?.map((c) => (
                  <li>
                    <NavLink to={`/category/${c.slug}`} className="dropdown-item">
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
                // <ul className='dropdown-menu'>
                //   <li>
                //     <li>
                //       <NavLink to={`/dashboard/${auth?.user?.role == 1 ? 'admin' : 'user'}`} className="nav-link">
                //         Dashboard
                //       </NavLink>
                //     </li>
                //   </li>
                //   <li>
                //     <div style={{ color: 'blue' }}>
                //       <label className="mx-2 my-2">{getName(auth)}</label>
                //       <button className="btn btn-primary" onClick={handleLogout}>
                //         Logout
                //       </button>
                //     </div>
                //   </li>
                // </ul>
                <>
                <li className="nav-item dropdown ms-2">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    style={{ border: "none" }}
                  >
                    {auth?.user?.name}
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink
                        to={`/dashboard/${
                          auth?.user?.role === 1 ? "admin" : "user"
                        }`}
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
