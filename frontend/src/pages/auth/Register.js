import React from 'react';
import Layout from '../../components/Layout/Layout';
import {registerdes} from '../pagescss/registercss.css';
import { Link } from 'react-router-dom';
// import { BiHide, BiShow } from 'react-icons/bi'; // Import the Hide icon from react-icons/bi
import { FaFacebook} from 'react-icons/fa'; // Import the Facebook from Font Awesome
import Gogglelogo from '../photospages/gogglelogo.jpg'; 

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import {library} from '@fortawesome/fontawesome-svg-core';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import usePasswordToggle from './usePasswordToggle';
library.add(faEye,faEyeSlash);


// const Register = () => {
  const Register = () => {
  // const [PasswordInputType, ToggleIcon]= usePasswordToggle();

  const [PasswordInputType, ToggleIconPassword, toggleVisibilityPassword] = usePasswordToggle();
  const [ConfirmPasswordInputType, ToggleIconConfirmPassword, toggleVisibilityConfirmPassword] = usePasswordToggle();
  
//  const onRegisterSuccess = () => {
//   setIsLoggedIn(true);
//  }//added


  return (
    <>
    <registerdes>
    <Layout title={"Register-Ashutosh Enterprise"}>
    <section className='rcontainer forms'>
            <div className='form signup'>
              <div className='form-content'>
              <div class="modal-header">
              <h1 class="fw-bold mb-0 fs-2">Register</h1>
              <Link to="/" className="btn-close custom-close-button" aria-label="Close"></Link>
               </div>

                <form action="#">
                <div className='field input-field'>
                    <input type="text" placeholder='Username' className='form-control rounded-3 input' />
                  </div>
                  <div className='field input-field'>
                    <input type="email" placeholder='Email' className='form-control rounded-3 input' />
                  </div>
                  {/* <div className='field input-field'>
                    <input type={PasswordInputType} placeholder='Password' className='form-control rounded-3 password' />
                    <span className="eye-icon">{ToggleIcon}</span>
                  </div>
                  <div className='field input-field'>
                    <input type="password" placeholder='ConfirmPassword' className='form-control rounded-3 confirmpassword' />
                    <span className="eye-icon">{ToggleIcon}</span>
                  </div> */}
                   <div className='field input-field'>
                    <input type={PasswordInputType} placeholder='Password' className='form-control rounded-3 password' />
                    <span className="eye-icon" onClick={toggleVisibilityPassword}>{ToggleIconPassword}</span>
                  </div>
                  <div className='field input-field'>
                    <input type={ConfirmPasswordInputType} placeholder='ConfirmPassword' className='form-control rounded-3 confirmpassword' />
                    <span className="eye-icon" onClick={toggleVisibilityConfirmPassword}>{ToggleIconConfirmPassword}</span>
                  </div>
                  <div className='field input-field'>
                    <button className='register-button'>Signup</button>
                  </div>
                </form>
                <div className='form-link'>
                    <span>Already have an account? <Link to="/Login" className='login-link'>Login</Link></span>
                  </div>
              </div>

              <div className='line'></div>

              <div className='media-options'>
                <Link to="/" className='field google'>
                  {/* <FaGoogle className="google-icon" /> Use the FaGoogle icon */}
                  <img src={Gogglelogo} alt="" className='google-icon'/>
                  <span>Login With Google</span>
                </Link>
                <Link to="/" className='field facebook'>
                  <FaFacebook className="facebook-icon" style={{ fontSize: '22px' }}  /> {/* Use the FaFacebook icon */}
                  <span>Login With Facebook</span>
                </Link>
              </div>
            </div>
          </section>
    </Layout>
    </registerdes>
    </>
  )
}

export default Register;

