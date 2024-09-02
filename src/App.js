import React from 'react';
import NavigationBar from './components/Navbar';
import Slider from './components/Slider';
import ProductCard from './components/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <CartProvider>
      <NavigationBar />
      <Slider />
      <Container className="mt-5">
        <Row>
          <Col>
            <ProductCard
              title="Product 1"
              description="This is product 1 description"
              imageUrl="https://via.placeholder.com/150"
            />
          </Col>
          <Col>
            <ProductCard
              title="Product 2"
              description="This is product 2 description"
              imageUrl="https://via.placeholder.com/150"
            />
          </Col>
          <Col>
            <ProductCard
              title="Product 3"
              description="This is product 3 description"
              imageUrl="https://via.placeholder.com/150"
            />
          </Col>
        </Row>
      </Container>
    </CartProvider>
  );
}

export default App;

