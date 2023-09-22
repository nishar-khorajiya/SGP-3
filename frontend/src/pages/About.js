import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import aboutdes from '../pages/pagescss/aboutuscss.css';
import { Facebook } from "react-bootstrap-icons";
import { Instagram } from "react-bootstrap-icons";
import { Whatsapp } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import aboutus1 from "./photospages/About us page-bro.png";
import ashishgandhaImage from './photospages/ashishgandha.jpg';
import sandeepgandhaImage from './photospages/sandeepgandha.jpg';

// const phonenumber1="9824095296";
const msg="Hello, I Have a Question about your Product";
const whatsappLink1 = `https://api.whatsapp.com/send?phone=${9824095296}&text=${encodeURIComponent(msg)}`;

// const phonenumber2="9924074741";
const whatsappLink2 = `https://api.whatsapp.com/send?phone=${9924074741}&text=${encodeURIComponent(msg)}`;

const About = () => {
  const [showReadMore, setShowReadMore] = useState(false);

  const toggleReadMore = () => {
    setShowReadMore(!showReadMore);
  };

  return (
    <>
      <Layout title={"About Us-Ashutosh Enterprise"}>
      <aboutdes>
          <div className='aboutusheading'>
            <h1>About Us</h1>
            <p>"Empowering Homes and Industries with Quality and Reliability: Your Trusted Source for a Spectrum of Essentials at Ashutosh Enterprise."</p>
          </div>
          <div className='aboutuscontainer'>
              <section className='about'>
                <div className='about-image'>
                  <img src={aboutus1} alt="" />
                </div>
                <div className='about-content'>
                  <h2>"Welcome to Ashutosh Enterprise - Your Trusted Source for Industrial and Household Essentials!"</h2>
                  <p>Founded by Ashish Amrutlal Gandha and Sandeep Amrutlal Gandha, Ashutosh Enterprise is a premier destination for all your industrial and household needs. We specialize in offering a wide range of top-quality products, including house paints, cements, coal, TMT bars, and more.</p>

                  {showReadMore ? (
                  <>
                    <p>With our commitment to excellence and customer satisfaction, we have established ourselves as a reliable supplier in the industry. Our store, located in the heart of Jamnagar at Gokulnagar, near Ashapura Bakery, brings you a diverse selection of products essential for both industrial projects and household requirements.</p>
                    <p>At Ashutosh Enterprise, we take pride in providing not only premium products but also exceptional service. We understand the importance of convenience, which is why we offer a seamless online shopping experience. Our website allows you to browse our catalog, place orders, and receive accurate and detailed invoices directly through our platform.</p>
                    <p>With every order, you can trust that our team works diligently to ensure your needs are met promptly and efficiently. Whether you're a contractor seeking industrial supplies or a homeowner looking for household essentials, we have you covered.</p>
                    <p>Thank you for choosing Ashutosh Enterprise as your trusted partner for all your industrial and household needs. We look forward to serving you and contributing to your projects and daily life.</p>
                    <p>Feel free to adapt and customize the text to match the tone and style of your website.</p>
                  </>
                ) : null}
                  <span className='read-more' onClick={toggleReadMore}>
                  {showReadMore ? "Read Less" : "Read More"}
                </span>
                </div>
              </section>
          </div>

          <section className='team-section'>
              <div className='row'>
                    <h1 className='teamh1'>Meet Our Team</h1>
              </div>
              <div className='row team-row'>
                {/* column--1 */}
              <div className='column'>
                <div className='teamcard'>
                    <div className='img-container'>
                      <img src={ashishgandhaImage} alt="" />
                    </div>
                    <h3 className='ameet'>Ashish Gandha</h3>
                    <p className='apara'>Founder</p>
                    <div className='aicons'>
                    <Link to="#" onClick={() => window.open("https://www.facebook.com/ashishgandha/", "_blank")} >
                   <Facebook className="asocial-icon facebook-icon" />
                   </Link>
                   <Link to="#" onClick={() => window.open("https://www.instagram.com/bhanusaliashish/", "_blank")} >
                    <Instagram className="asocial-icon instagram-icon"/>  
                    </Link>
                    <Link to={whatsappLink2} target="_blank" rel="noopener noreferrer">
                    <Whatsapp className="asocial-icon whatsapp-icon"/>
                    </Link>
                    </div>
                </div>
              </div>
                {/* column--2 */}
                <div className='column'>
                <div className='teamcard'>
                    <div className='img-container'>
                      <img src={sandeepgandhaImage} alt="" />
                    </div>
                    <h3 className='ameet'>Sandeep Gandha</h3>
                    <p className='apara'>Founder</p>
                    <div className='aicons'>
                    <Link to="#" onClick={() => window.open("https://www.facebook.com/sandip.gandha.7/", "_blank")} >
                      <Facebook className="asocial-icon facebook-icon" />
                    </Link>
                    <Link to="#" onClick={() => window.open("https://www.instagram.com/sandip.gandha.7", "_blank")} >
                    <Instagram className="asocial-icon instagram-icon"/>  
                    </Link>
                    <Link to={whatsappLink1} target="_blank" rel="noopener noreferrer">
                    <Whatsapp className="asocial-icon whatsapp-icon"/>
                    </Link>
                    </div>
                </div>
              </div>
              </div>
          </section>
        </aboutdes>
      </Layout>
    </>
  )
}

export default About
