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


// const Login = () => {

const Login = () => {
  const [PasswordInputType, ToggleIconPassword, toggleVisibilityPassword] = usePasswordToggle();

  const clientId = "281182717717-6cd5td37scocnhje9h1534uar7j3laik.apps.googleusercontent.com";
  const [showLoginButton, setShowLoginButton] = useState(true);
  const [showLogoutButton, setShowLogoutButton] = useState(false);
  const { login, logout} = useAuth(); // Use the useAuth hook
  const navigate = useNavigate(); // Use navigate to redirect


  const onLoginSuccess = (res) => {
    console.log("Login success:", res.profileObj);
    login(res.profileObj); // Set the user's data in the context
    setShowLoginButton(false);
    setShowLogoutButton(true);
    navigate('/'); // Redirect to the homepage
  };

  // const google=()=>{
  //   window.open("http://localhost:8080/auth/google/callback","_self")//added
  // }

  const onFailureSuccess=(res)=>{
    console.log("Login faied:",res);
  }

  const onSignoutSuccess = () => {
    alert("You have been signed out successfully");
    logout(); // Clear the user's data from the context
    setShowLoginButton(true);
    setShowLogoutButton(false);
    navigate('/'); // Redirect to the homepage
  };

  useEffect(() => {
    // Load the Google API client library
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';
    script.onload = () => {
      // Initialize the Google API client library
      window.gapi.load('client:auth2', () => {
        window.gapi.client.init({
          clientId: clientId,
          scope: "profile"
        }).then(() => {
          // The client library has been initialized successfully
        }).catch((error) => {
          console.error("Error initializing gapi client:", error);
        });
      });
    };

    document.body.appendChild(script);
  }, [clientId]);

  // var accessToken = gapi.auth.getToken().access_token;
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
                {/* {
                  showLoginButton ? <GoogleLogin
                    clientId={clientId}
                    buttonText="Login with Google"
                    // onSuccess={onLoginSuccess}
                    onSuccess={onLoginSuccess}
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
                } */}
                {
                  showLoginButton ? <GoogleLogin
                  clientId={clientId}
                  buttonText="Login with Google"
                  onSuccess={onLoginSuccess}
                  onFailure={onFailureSuccess}
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

