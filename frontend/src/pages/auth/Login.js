import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Layout from '../../components/Layout/Layout';
import { logindes } from '../pagescss/logincss.css';
import { Link } from 'react-router-dom';
// import { BiHide } from 'react-icons/bi'; 
import { FaFacebook} from 'react-icons/fa'; // Import the Facebookfrom Font Awesome
// import Gogglelogo from '../photospages/gogglelogo.jpg'; 
import {GoogleLogin, GoogleLogout} from 'react-google-login';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import {library} from '@fortawesome/fontawesome-svg-core';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import usePasswordToggle from './usePasswordToggle';
import { useState } from 'react';
// import { load } from 'gapi-script';
import { useAuth } from '../auth/AuthContext';
library.add(faEye,faEyeSlash);


const Login = () => {
  const [PasswordInputType, ToggleIconPassword, toggleVisibilityPassword] = usePasswordToggle();

  const clientId = "281182717717-6cd5td37scocnhje9h1534uar7j3laik.apps.googleusercontent.com";
  const [showLoginButton, setShowLoginButton] = useState(true);
  const [showLogoutButton, setShowLogoutButton] = useState(false);
  const { login, logout} = useAuth(); // Use the useAuth hook
 
  const history = useNavigate()
  const [credentials, setCredentials] = useState({ email: "", password: "" })

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
      // console.log(json.user.name)

      if (json.success) {
        localStorage.setItem('token', json.token)
        localStorage.setItem('name', json.user.name)

        history('/')
        // props.showAlert("Login successfully",'success')
      }
      else {
        console.log("failed")
        history('../Pagenotfound')
        // props.showAlert("Login failed",'danger')
      }
    }
    catch (error) {
      console.log(error)
    }
  }
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }



  return (
    <>
      <logindes>
        <Layout >
          <section className='lcontainer forms'>
            <div className='form login'>
              <div className='form-content'>
              <div class="modal-header">
              <h1 class="fw-bold mb-0 fs-2">Login</h1>
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
                    <input type={PasswordInputType} placeholder='Password' name='password' value={credentials.password} onChange={onChange} className='form-control rounded-3 password' />
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

                {
                  showLoginButton ? <GoogleLogin
                  buttonText="Login with Google"
                  cookiePolicy={'single_host_origin'}
                  prompt="select_account" // Add this line
                  className='field goggle'
                /> : null
                }
                {
                  showLogoutButton ?
                    <GoogleLogout
                      clientId={clientId}
                      buttonText="Logout"
                      className='field google'
                    />
                    : null
                }
                <Link to="/" className='field facebook'>
                  <FaFacebook className="facebook-icon" style={{ fontSize: '22px' }}  /> {/* Use the FaFacebook icon */}
                  <span>Login With Facebook</span>
                </Link>
              </div>
            </div>
          </section>
        </Layout>
      </logindes>
    </>
  )
}

export default Login;

