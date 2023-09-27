import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import web from './webphotos/ashutosh.png';
// import {} from 'react-icons'; import this to put icon anywhere in project. search react icons in goggle
// see above we have imported because one warning will due to navbaNavLink

const Header = ({isLoggedIn}) => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary " >
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link to="/"  className="navbar-brand">
        <img src={web} alt="" style={{height:"50px", width:"50px" , borderRadius:"60%", paddingRight:"3px"}}/>
        Ashutosh Enterprise
      {/* add icon by ctrl+i */}
        </Link>
      <ul className="nav nav-pills" style={{paddingLeft:"650px"}} >
        {/* style={{paddingBottom:"5px"}} */}
        {/* navbar-nav ms-auto mb-2 mb-lg-0 */}

      {/* <li className='nav-item custom-control custom-switch mr-5'>
      <input type="checkbox" className='custom-control-input' id='selector'/>
        <label htmlFor="selector" className="custom-control-label">Dark Mode</label>
      </li> */}

        <li className="nav-item">
          <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
        </li>
        
        {/* <li className="nav-item">
          <NavLink to="/" className="nav-link active">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/" className="nav-link active">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/" className="nav-link active">Policy</NavLink>
        </li> */}

          <li className="nav-item dropdown">
          <NavLink to="/category"  className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </NavLink>
          <ul class="dropdown-menu">
            <li><NavLink to="/cement" className="dropdown-item" >Cements</NavLink></li>
            <li><NavLink to="/colours" className="dropdown-item" >Colours</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink to="/more" className="dropdown-item">More</NavLink></li>
          </ul>
        </li>
        {isLoggedIn ? (
            <>
              <li className="nav-item">
                <NavLink to="/profile" className="nav-link" >
                  Username
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link" >
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
        {/* <li className="nav-item">
          <NavLink to="/register" className="nav-link" >Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/login" className="nav-link">Login</NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink to="/cart" className="nav-link">Cart (0)</NavLink>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>

    </>
  );
};

export default Header;
