import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function NewSearch() {
  // Implement the user portfolio component here
  return (
    <Form>
      <h2>New Search</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Type</Form.Label>
        <Form.Control type="type" placeholder="Type of animal" />
        <Form.Text className="text-muted">
          Dog, Cat, Other
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Breed</Form.Label>
        <Form.Control type="breed" placeholder="Breed of animal" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Good with other animals" />
        <Form.Check type="checkbox" label="Good with children" />
        <Form.Check type="checkbox" label="Animal must be leashed at all times" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Age</Form.Label>
        <Form.Control type="age" placeholder="Age of animal" />
        <Form.Text className="text-muted">
          Young, Adult, Senior
        </Form.Text>
      </Form.Group>
      <Link to="/SwipeProfiles">
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Link>
      
    </Form>
  );
}

export default NewSearch; 