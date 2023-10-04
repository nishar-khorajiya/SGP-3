import React from 'react';
import Layout from '../components/Layout/Layout';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
  return (
    <Layout title="Ashutosh Enterprise">
      {/* Automatic Carousel */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="carousel-image-1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="carousel-image-2.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="carousel-image-3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      {/* Category Cards */}
      <Container className="mt-5">
        <h2 className="mb-4">Shop by Category</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="category-image-1.jpg" />
              <Card.Body>
                <Card.Title>Category 1</Card.Title>
                <Button variant="primary">Shop Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="category-image-2.jpg" />
              <Card.Body>
                <Card.Title>Category 2</Card.Title>
                <Button variant="primary">Shop Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="category-image-3.jpg" />
              <Card.Body>
                <Card.Title>Category 3</Card.Title>
                <Button variant="primary">Shop Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Small Banners */}
      <Container className="mt-5">
        <Row>
          <Col md={6}>
            <img src="banner-1.jpg" alt="Banner 1" className="img-fluid" />
          </Col>
          <Col md={6}>
            <img src="banner-2.jpg" alt="Banner 2" className="img-fluid" />
          </Col>
        </Row>
      </Container>

      {/* Video Cards */}
      <Container className="mt-5">
        <h2 className="mb-4">Featured Videos</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="video-thumbnail-1.jpg" />
              <Card.Body>
                <Card.Title>Video Title 1</Card.Title>
                <Button variant="primary">Watch Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="video-thumbnail-2.jpg" />
              <Card.Body>
                <Card.Title>Video Title 2</Card.Title>
                <Button variant="primary">Watch Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="video-thumbnail-3.jpg" />
              <Card.Body>
                <Card.Title>Video Title 3</Card.Title>
                <Button variant="primary">Watch Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Home;
