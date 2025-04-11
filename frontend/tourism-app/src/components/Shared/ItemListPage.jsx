import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Card, Button, Spinner, Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaLocationArrow } from 'react-icons/fa';
import './ItemListPage.css'; // 👈 Import custom styles

const ItemListPage = ({ fetchItems, items, loading, error, itemType, itemDetailsRoute }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch, fetchItems]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <Spinner animation="border" role="status" />
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-danger">Error: {error}</p>;
  }

  return (
    <Container>
      <h1 className="text-center mt-5">{itemType}</h1>
      <Row className="mt-4">
        {items.map((item) => (
          <Col md={4} key={item.id} className="mb-4">
            <Card className="custom-card h-100 shadow-sm">
              <Card.Img variant="top" src={item.image} alt={item.name} className="custom-card-img" />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title className="custom-title">{item.name}</Card.Title>
                  <Card.Text className="custom-location">
                    <FaMapMarkerAlt className="me-2 text-primary" />
                    {item.address}
                  </Card.Text>
                  <Card.Text className="custom-region">
                    <FaLocationArrow className="me-2 text-dark" />
                    {item.destination && item.destination.name}
                    
                  </Card.Text>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="custom-price">à partir de <strong>{item.price} DT</strong></span>
                  <Button
                    variant="primary"
                    href={`/${itemDetailsRoute}/${item.id}`}
                    className="custom-details-btn"
                  >
                    Plus de details
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ItemListPage;
