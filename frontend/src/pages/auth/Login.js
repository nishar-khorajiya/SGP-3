import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import '../pagescss/logincss.css';
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
// import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import usePasswordToggle from './usePasswordToggle';
import { useState, useContext } from 'react';
import ProviderContext from '../../Context/ProviderContext';
import { useAuth } from '../../Context/auth';

// import axios from 'axios';
library.add(faEye, faEyeSlash);


const Login = () => {
  const show = useContext(ProviderContext)
  const [PasswordInputType, ToggleIconPassword, toggleVisibilityPassword] = usePasswordToggle();

  // const clientId = "281182717717-6cd5td37scocnhje9h1534uar7j3laik.apps.googleusercontent.com";
  const [showLoginButton] = useState(true);
  const [showLogoutButton] = useState(false);
  const history = useNavigate()
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  const [auth, setAuth] = useAuth();

  const handleSubmit = async (e) => {
    console.log()
    try {
      e.preventDefault(credentials.email)
      const response = await fetch(`http://localhost:8080/api/v1/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhOTM2ZWZmYzBjMzVjZTIyMzIyNzdmIn0sImlhdCI6MTY4ODgxNzU0Mn0.3AwNxNtzOERB9LMz86GlQy0gm9hftYe0zPmdMnK7zrc"
        },
        body: JSON.stringify({ email: credentials.email, password: credentials.password })
      });
      const json = await response.json();

      if (json.success) {

        show.updateError(1, 'success', "Login successfully");
        setTimeout(() => {
          show.updateError(0, " ", " ")
        }, 3000);

        localStorage.setItem('auth', JSON.stringify(json))
        history('/')
        setAuth({
          ...auth,
          user: json.user,
          token: json.token
        })
      }
      else {
        show.updateError(1, 'danger', JSON.stringify(json.message));
        setTimeout(() => {
          show.updateError(0, " ", " ")
        }, 3000);
        console.log("failed")
        history('../Login')
      }
    }
    catch (error) {
      console.log(error + "hi")
    }

  }
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <>

      <Layout title={"Login-Ashutosh Enterprise"}>
        <section className='lcontainer forms'>
          <div className='form login'>
            <div className='form-content'>
              <div className="modal-header">
                <h1 className="fw-bold mb-0 fs-2">Login</h1>
                <Link to="/" className="btn-close custom-close-button" aria-label="Close"></Link>
              </div>

              <form onSubmit={handleSubmit}>
                <div className='field input-field'>
                  <input type="email" placeholder='Email' value={credentials.email} name='email' onChange={onChange} className='form-control rounded-3 input' />
                </div>
                {/* <div className='field input-field'>
                    <input type="password" placeholder='Password' className='form-control rounded-3 password' />
                    <BiHide className="eye-icon" /> 
                  </div> */}
                <div className='field input-field'>
                  <input type={PasswordInputType} placeholder='Password' name='password' value={credentials.password} autoComplete="on" onChange={onChange} className='form-control rounded-3 password' />
                  <span className="eye-icon" onClick={toggleVisibilityPassword}>{ToggleIconPassword}</span>
                </div>
                <div className='form-link'>
                  <Link to="/" className="forgot-pass">Forgot Password?</Link>
                </div>
                <div className='field input-field'>
                  <button className='login-button'>Login</button>
                </div>
              </form>
              <div className='form-link'>
                <span>Already have an account? <Link to="/Register" className='signup-link'>Signup</Link></span>
              </div>
            </div>

            <div className='line'></div>

            <div className='media-options'>

              {/* <GoogleLogin
                  buttonText="Login with Google"
                  // cookiePolicy={'single_host_origin'}
                  // prompt="select_account" // Add this line
                  className='field goggle'
                />  */}
              <Link to="/" className='field facebook'>
                <FaFacebook className="facebook-icon" style={{ fontSize: '22px' }} /> {/* Use the FaFacebook icon */}
                <span>Login With Facebook</span>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Login;

