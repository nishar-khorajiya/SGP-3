import React from 'react';
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
library.add(faEye,faEyeSlash);



// const Login = () => {

const Login = ({ setIsLoggedIn }) => {
  const [PasswordInputType, ToggleIconPassword, toggleVisibilityPassword] = usePasswordToggle();

  const clientId="84282587711-factgcb2h9k62pgd33p6kbbthm656ffk.apps.googleusercontent.com";
  const [showLoginButton, setShowLoginButton]=useState(true);
  const [showLogoutButton, setShowLogoutButton]=useState(false);

  // const onLoginSuccess=(res)=>{
  //   console.log("Login success:",res.profileObj);
  //   setShowLoginButton(false);
  //   setShowLogoutButton(true);
  //   setIsLoggedIn(true);//set the user to be logged in
  // }

  const google=()=>{
    window.open("http://localhost:8080/auth/google/callback","_self")
  }

  const onFailureSuccess=(res)=>{
    console.log("Login faied:",res);
  }

  const onSignoutSuccess=()=>{
    alert("You have been Signedout Succeesfully");
    setShowLoginButton(true);
    setShowLogoutButton(false);
  }

  return (
    <>
      <logindes>
        <Layout title={"Login-Ashutosh Enterprise"}>
          <section className='lcontainer forms'>
            <div className='form login'>
              <div className='form-content'>
              <div class="modal-header">
              <h1 class="fw-bold mb-0 fs-2">Login</h1>
              <Link to="/" className="btn-close custom-close-button" aria-label="Close"></Link>
               </div>

                <form action="#">
                  <div className='field input-field'>
                    <input type="email" placeholder='Email' className='form-control rounded-3 input' />
                  </div>
                  {/* <div className='field input-field'>
                    <input type="password" placeholder='Password' className='form-control rounded-3 password' />
                    <BiHide className="eye-icon" /> 
                  </div> */}
                   <div className='field input-field'>
                    <input type={PasswordInputType} placeholder='Password' className='form-control rounded-3 password' />
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
                    clientId={clientId}
                    buttonText="Login with Google"
                    // onSuccess={onLoginSuccess}
                    onSuccess={google}
                    onFailure={onFailureSuccess} 
                    cookiePolicy={'single_host_origin'}
                    className='field goggle'
                  /> : null
                }
                {
                  showLogoutButton ?
                    <GoogleLogout
                      clientId={clientId}
                      buttonText="Logout"
                      onLogoutSuccess={onSignoutSuccess}
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
