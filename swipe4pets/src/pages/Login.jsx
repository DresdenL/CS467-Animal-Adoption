import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

export default function Login() {
  const [selectedType, setSelectedType] = useState('/ShelterHome'); 

  function changeToShelter() {
    setSelectedType('/ShelterHome')
  };
  
  function changeToAdopter() {
    setSelectedType('/AdopterHome')
  };  

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 4 }}>
          <h1>Login</h1>
          <Form>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check onClick={() => changeToShelter()}
                    inline
                    label="Shelter"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check onClick={() => changeToAdopter()}
                    inline
                    label="Adopter"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
            <Link to="/"><Button>Back</Button></Link> 
            <Link to={selectedType}>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
            </Link>
        </Form>
        </Col>
    </Row>

    </Container>
    
  );
} 


