import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
// import phot from './photospages/Contactusimage.png';
import { contdes } from "../pages/pagescss/contactcss.css";
import { Link } from "react-router-dom";
import { GeoAlt } from "react-bootstrap-icons";
import { Telephone } from "react-bootstrap-icons";
import { Envelope } from "react-bootstrap-icons";
import { Facebook } from "react-bootstrap-icons";
import { Instagram } from "react-bootstrap-icons";
import { Whatsapp } from "react-bootstrap-icons";

const Contact = () => {
  const msg="Hello,Ashish Gandha";

  const whatsappLink1 = `https://api.whatsapp.com/send?phone=${9924074741}&text=${encodeURIComponent(msg)}`;
  const [formData,setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: ""
  });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value
  //   }));
  // };

  const handleSubmit = async(e) => {
    e.preventDefault();

  try {
    const response = await fetch('http://localhost:8080/api/v1/auth/contactus', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name:formData.name,email:formData.email,phone:formData.phone,address:formData.address,message:formData.message})
    });

    if (response.status === 200) {
      // Email sent successfully
      // You can show a success message or redirect the user to a thank you page
      console.log("emailsend")
    } else {
      console.log("invalid credential")
    }
  } catch (error) {
    console.error('Error:', error);
  }
  }

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <Layout title={"Contact Us-Ashutosh Enterprise"}>
        <contdes>
          <div className="contactcontainer">
            <div className="contactcontent">
              <div className="left-side">
                <div className="address details">
                <div className="address details">
                    <a
                      href="https://goo.gl/maps/quR1eyeBBWPUDXxS8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="location-link"
  >
                      <GeoAlt className="location-icon" />
                      <div className="topic black-text">Address</div>
                      <div className="text-one black-text">Gokulnagar, Jamnagar</div>
                      <div className="text-two black-text">Opp Ashapura Bakery</div>
                      </a>
                        </div>
                        </div>

                <div className="phone details">
                  <Telephone className="phone-icon" />
                  <div className="topic black-text">Phone</div>
                  <div className="text-one black-text">+91 9924074741</div>
                  <div className="text-two black-text">+91 9824095296</div>
                </div>

                <div className="email details">
                <a
                 href={`mailto:ashishgandha999@gmail.com,sandeepgandha@gmail.com?subject=Inquiry%20from%20Website&body=Hello%20Ashish%20and%20Sandeep,%0A%0AI am reaching out regarding...%0A%0AThank%20you.`}
                className="defemails"
                >
                <Envelope className="email-icon" />
                <div className="topic black-text">Email</div>
              <div className="text-one black-text">ashishgandha999@gmail.com</div>
              <div className="text-two black-text">sandeepgandha@gmail.com</div>
              </a>
              </div>



                <div className="csocial-media-icons">
                <Link to="#" onClick={() => window.open("https://www.facebook.com/ashishgandha/", "_blank")} >
                <Facebook className="social-icon facebook-icon" />
                </Link>

                <Link to="#" onClick={() => window.open("https://www.instagram.com/bhanusaliashish/", "_blank")} >
                <Instagram className="social-icon instagram-icon"/>  
                </Link>

                <Link to={whatsappLink1} target="_blank" rel="noopener noreferrer">
                <Whatsapp className="social-icon whatsapp-icon"/>
                </Link>
                </div>

              </div>

              <div className="right-side">
                <div className="topic-text">Get in Touch with us</div>
                <p>
                  If you have any work from us or any types of queries related
                  to our Products you can contact us through this form.It's our
                  pleasure to help you.{" "}
                </p>

                <form onSubmit={handleSubmit}>

                <div className="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" value={formData.name} name='name' onChange={onChange}></input>
                <label for="floatingInput">Name</label>
                </div>

                <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" value={formData.email} name='email' onChange={onChange}></input>
                <label for="floatingInput">Email</label>
                </div>

                <div class="form-floating mb-3">
                <input type="number" class="form-control" id="floatingInput" value={formData.phone} name='phone' onChange={onChange}></input>
                <label for="floatingInput">Phone</label>
                </div>

                <div class="form-floating mb-3">
                <textarea class="form-control" id="exampleFormAddress" rows="3" value={formData.address} name='address' onChange={onChange}></textarea>
                <label for="floatingInput">Address</label>
                </div>

                <div class="form-floating mb-3">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={formData.message} name='message' onChange={onChange}></textarea>
                <label for="exampleFormControlTextarea1">Message </label>
                </div>

                <button type="submit" className="btn btn-primary form-button">
                Submit
              </button>

                </form>
              </div>
            </div>
          </div>
        </contdes>
      </Layout>
    </>
  );
};

export default Contact;
