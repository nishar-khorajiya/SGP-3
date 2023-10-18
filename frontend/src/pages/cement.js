import React from 'react';
import Layout from '../components/Layout/Layout';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { Cart, Bag } from 'react-bootstrap-icons'; // Import Cart and Shopping Bag icons from Bootstrap Icons

// Import the images you want for each card
import ambujaCementImage from '../pages/photospages/ambuja_cement.webp';
import ultratechImage from '../pages/photospages/ultratech.jpg';
import ambujapro from '../pages/photospages/product_ambuja.jpg'
import ultratechpro from '../pages/photospages/product_ultratech.jpg'

const Cement = () => {
  // Define an array of product data with different titles, prices, and images
  const ambujaCementProducts = [
    { title: 'Ambuja Cement 5kg', price: 'Rs.500/-', image: ambujapro },
    { title: 'Ambuja Cement 10kg', price: 'Rs.1000/-', image: ambujapro },
    { title: 'Ambuja Cement 15kg', price: 'Rs.2000/-', image: ambujapro },
    { title: 'Ambuja Cement 20kg', price: 'Rs.2500/-', image: ambujapro },
  ];

  const ultratechCementProducts = [
    { title: 'Ultratech Cement 5kg', price: 'Rs.1000/-', image: ultratechpro },
    { title: 'Ultratech Cement 10kg', price: 'Rs.2000/-', image: ultratechpro },
    { title: 'Ultratech Cement 15kg', price: 'Rs.2500/-', image: ultratechpro },
    { title: 'Ultratech Cement 20kg', price: 'Rs.3000/-', image: ultratechpro },
  ];

  return (
    <Layout title="Cement-Ashutosh Enterprise">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={ambujaCementImage} alt="Ambuja Cement" style={{ height: '580px', width: '1200px' }} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ultratechImage} alt="Ultratech Cement" style={{ height: '580px', width: '100%' }} />
        </Carousel.Item>
      </Carousel>

      {/* Ambuja Cement Category Cards */}
      <Container className="mt-4">
        <h2>Ambuja Cement</h2>
        <Row xs={1} sm={2} md={3} lg={4} xl={4} className="g-4">
          {ambujaCementProducts.map((product, idx) => (
            <Col key={idx}>
              <Card className="h-100 shadow" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <Card.Img variant="top" src={product.image} style={{height:'250px'}}/>
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
        <h2>Ultratech Cement</h2>
        <Row xs={1} sm={2} md={3} lg={4} xl={4} className="g-4">
          {ultratechCementProducts.map((product, idx) => (
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

export default Cement;