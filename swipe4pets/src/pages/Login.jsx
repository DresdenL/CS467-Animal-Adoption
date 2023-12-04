import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import NavBar from "../Components/NavBar.jsx";

export default function Login() {
  const [selectedType, setSelectedType] = useState('/ShelterHome'); 

  function changeToShelter() {
    setSelectedType('/ShelterHome')
  };
  
  function changeToAdopter() {
    setSelectedType('/AdopterHome')
  };  

  return (
    <div class="center">
      <NavBar />
      <Container>
      <Row>
        <Col md={{ span: 6, offset: 4 }}>
          <h1>Login</h1>
          <Form>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <input class="kelly-input" type='email' placeholder='Enter email' />
            </Form.Group>
            <br></br>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <input class="kelly-input" type='password' placeholder='Password' />
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
            <Link to="/"><button class="kelly-button">Back</button></Link> 
            &nbsp; &nbsp;
            <Link to={selectedType}>
            <button class="kelly-button" type='submit'>
              Submit
            </button>
            </Link>
        </Form>
        </Col>
    </Row>

    </Container>
    </div>
    
    
  );
} 


