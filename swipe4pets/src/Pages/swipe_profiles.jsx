import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profile_pic from './../Components/Adopter/temp/dog.png';

function SwipeProfiles() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={{ span: 1, offset: 2 }}>
          1 of 3
        </Col>
        <Col md={{ span: 6 }}>
          <img src={profile_pic} />
        </Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
}

export default SwipeProfiles;
