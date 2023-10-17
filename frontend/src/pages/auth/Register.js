import React, { useState ,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import '../pagescss/registercss.css';
import { Link } from 'react-router-dom';
// import { BiHide, BiShow } from 'react-icons/bi'; // Import the Hide icon from react-icons/bi
import { FaFacebook } from 'react-icons/fa'; // Import the Facebook from Font Awesome
import Gogglelogo from '../photospages/gogglelogo.jpg';
import ProviderContext from '../../Context/ProviderContext';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import usePasswordToggle from './usePasswordToggle';
import { useAuth } from '../../Context/auth';
import axios from 'axios';
library.add(faEye, faEyeSlash);


// const Register = () => {
const Register = () => {

  const [auth,setAuth]=useAuth();
  const history = useNavigate();
  const show = useContext(ProviderContext)
  const [credentials, setCredentials] = useState({ name: "", email: "", phone: "", password: "",cpassword: "" })

  const handleSubmit = async (e) => {
    // try {
    //   e.preventDefault()
    //   const response = await fetch(`http://localhost:8080/api/v1/auth/register`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhOTM2ZWZmYzBjMzVjZTIyMzIyNzdmIn0sImlhdCI6MTY4ODgxNzU0Mn0.3AwNxNtzOERB9LMz86GlQy0gm9hftYe0zPmdMnK7zrc"
    //     },
    //     body: JSON.stringify({ name: credentials.name, email: credentials.email, phone: credentials.phone, password: credentials.password,cpassword: credentials.cpassword })
    //   });
    //   const json = await response.json();
    //   // console.log(json)

    //   if (json.data.success) {
    //     show.updateError(1,'success',"Registered successfully");
    //     setTimeout(() => {
    //       show.updateError(0," "," ")
    //     }, 2000);

    //     localStorage.setItem('auth',JSON.stringify(json.data))
    //     history('/')
    //     setAuth({
    //       ...auth,
    //       user:json.data.user,
    //       token:json.data.token
    //     })
    //     // console.log('User Registered');
    //     // props.showAlert("created user successfully", 'success')
    //   }
    //   else {
    //     show.updateError(1,'danger',json.message);
    //     setTimeout(() => {
    //       show.updateError(0," "," ")
    //     }, 2000);
    //     // props.showAlert("signup failed", 'danger')
    //     history('../Register')
    //     console.log('Signup Failed');
    //   }
    // }
    // catch (error) {
    //   console.log(error)
    // }
  // const requiredFields = ['name', 'email', 'phone', 'password', 'cpassword'];
  // const missingFields = requiredFields.filter((field) => !credentials[field]);

  // if (missingFields.length > 0) {
  //   console.log('Please fill in all required fields.');
  //   return;
  // }
    e.preventDefault();

    const requestData = {
      name: credentials.name || "",
      email: credentials.email,
      phone: credentials.phone,
      password: credentials.password,
      cpassword: credentials.cpassword,
    };
  
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/register', requestData, {
        headers: {
          'Content-Type': 'application/json',
          // You can include other headers here, such as the "auth-token" header
        },
      });
  
      const json = response.data;
  
      if (json.data.success) {
        show.updateError(1, 'success', 'Registered successfully');
        setTimeout(() => {
          show.updateError(0, ' ', ' ');
        }, 2000);
  
        localStorage.setItem('auth', JSON.stringify(json.data));
        history('/');
        setAuth({
          ...auth,
          user: json.data.user,
          token: json.data.token,
        });
      } else {
        console.log(json.data.message)
        show.updateError(1, 'danger', json.data.message);
        setTimeout(() => {
          show.updateError(0, ' ', ' ');
        }, 2000);
  
        history('../Register');
      }
    } catch (error) {
      console.log(error);
      console.log("hiiiiiii")
    }
  
  }
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  // const [PasswordInputType, ToggleIcon]= usePasswordToggle();

  const [PasswordInputType, ToggleIconPassword, toggleVisibilityPassword] = usePasswordToggle();
  const [ConfirmPasswordInputType, ToggleIconConfirmPassword, toggleVisibilityConfirmPassword] = usePasswordToggle();

  //  const onRegisterSuccess = () => {
  //   setIsLoggedIn(true);
  //  }//added


  return (
    <>
      
        <Layout title={"Register-Ashutosh Enterprise"}>
          <section className='rcontainer forms'>
            <div className='form signup'>
              <div className='form-content'>
                <div className="modal-header">
                  <h1 className="fw-bold mb-0 fs-2">Register</h1>
                  <Link to="/" className="btn-close custom-close-button" aria-label="Close"></Link>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className='field input-field'>
                    <input type="name" placeholder='Username' className='form-control rounded-3 input' value={credentials.name} name='name' onChange={onChange} id="floatingname" />
                  </div>
                  <div className='field input-field'>
                    <input type="email" placeholder='Email' className='form-control rounded-3 input' name='email' value={credentials.email} onChange={onChange} />
                  </div>
                    <div className='field input-field'>
                    <input type="tel" placeholder='Phone Number' className='form-control rounded-3 input' value={credentials.phone} name='phone'onChange={onChange} id="floatingPhonenumber" />
                  </div>
                  <div className='field input-field'>
                    <input type={PasswordInputType} placeholder='Password' className='form-control rounded-3 password' name='password' value={credentials.password} autoComplete="on" onChange={onChange}  />
                    <span className="eye-icon" onClick={toggleVisibilityPassword}>{ToggleIconPassword}</span>
                  </div>
                  <div className='field input-field'>
                    <input type={ConfirmPasswordInputType} placeholder='ConfirmPassword' className='form-control rounded-3 confirmpassword' name='cpassword' value={credentials.cpassword} autoComplete="on" onChange={onChange}/>
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
                  <img src={Gogglelogo} alt="" className='google-icon' />
                  <span>Login With Google</span>
                </Link>
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

export default Register;

