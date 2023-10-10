import React from 'react';
import Layout from '../components/Layout/Layout';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// Import the images you want for each card
import AsianImage from '../pages/photospages/asian.jpg';
import BergerImage from '../pages/photospages/berger.jpg';
import asian1 from '../pages/photospages/asian1.png';
import asian2 from '../pages/photospages/asian2.png';
import asian3 from '../pages/photospages/asian3.png';
import asian4 from '../pages/photospages/asian4.png';
import asian5 from '../pages/photospages/asian5.png';
import asian6 from '../pages/photospages/asian6.png';
import asian7 from '../pages/photospages/asian7.png';
import asian8 from '../pages/photospages/asian8.png';

 

import { Cart, Bag } from 'react-bootstrap-icons'; // Import Cart and Shopping Bag icons from Bootstrap Icons
const Paint = () => {

    const asianpaintsProducts = [
        { title: 'Ace Advanced', price: 'Rs.161/L', image: asian3 },
        { title: 'Ace Emulsion', price: 'Rs.161/L', image: asian4 },
        { title: 'Apcolite Advanced Emulsion', price: 'Rs.315/L', image: asian1 },
        { title: 'Apcolite Premium Emulsion', price: 'Rs.269/L', image: asian2 },
        { title: 'Advanced Waterproof emulsion', price: 'Rs.266/L', image: asian5 },
        { title: 'Apex Ultima', price: 'Rs.356/L', image: asian6 },
        { title: 'Weatherproof Emulsion', price: 'Rs.271/L', image: asian7 },
        { title: 'Royale Aspira', price: 'Rs.595/L', image: asian8 },
      ];
    
      const bergerpaintsProducts = [
        { title: '', price: 'Rs.', image: asian4 },
        { title: '', price: 'Rs.', image: asian4 },
        { title: '', price: 'Rs.', image: asian4 },
        { title: '', price: 'Rs.', image: asian4 },
      ];

  return (
    <Layout title="Paints-Ashutosh Enterprise">
     <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={AsianImage} alt="Ambuja Cement" style={{ height: '580px', width: '1200px' }} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={BergerImage} alt="Ultratech Cement" style={{ height: '580px', width: '100%' }} />
        </Carousel.Item>
      </Carousel>

      {/* Ambuja Cement Category Cards */}
      <Container className="mt-4">
        <h2>Asian Paints</h2>
        <Row xs={1} sm={2} md={3} lg={4} xl={4} className="g-4">
          {asianpaintsProducts.map((product, idx) => (
            <Col key={idx}>
              <Card className="h-100 shadow" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',padding:'8%' }}>
                <Card.Img variant="top" src={product.image} style={{height:'250px',width:'230px'}}/>
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text text-dark">{product.price}</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <Button variant="primary">
                      Buy Now <Cart size={16} className="ml-2" />
                    </Button>
                    <Button variant="success">
                      Add to Cart <Bag size={16} className="ml-2" />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      

      {/* Ultratech Cement Category Cards */}
      <Container className="mt-4">
        <h2>Berger Paints</h2>
        <Row xs={1} sm={2} md={3} lg={4} xl={4} className="g-4">
          {bergerpaintsProducts.map((product, idx) => (
            <Col key={idx}>
              <Card className="h-100 shadow" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <Card.Img variant="top" src={product.image} style={{height:'250px',width:'300px'}}/>
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text text-dark">{product.price}</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <Button variant="primary">
                      Buy Now <Cart size={16} className="ml-2" />
                    </Button>
                    <Button variant="success">
                      Add to Cart <Bag size={16} className="ml-2" />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export default Paint;
