import React from 'react';
import Container from 'react-bootstrap/Container';
import NavBar from '../../Components/NavBar.jsx';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function AdopterHome() {
  return (
    <div>
      <NavBar />
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 4 }}>
            <h1>Edit Adopters Information</h1>
            <Form>
                <Form.Label>Name</Form.Label>
                <Form.Control type='name' placeholder='Enter new name' />
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder='Enter new email' />
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Enter new password' />
                <Form.Label>Location</Form.Label>
                <Form.Control type='location' placeholder='Enter new location' />
              <Link to={'/AdopterHome'}>
              <Link to="/AdopterHome"><Button>Back</Button></Link> 
              <Button variant='primary' type='submit'>
                Submit
              </Button>
              </Link>
            </Form>
          </Col>
        </Row>
      
    </Container>
    </div>
    
   
  );
}

export default AdopterHome;