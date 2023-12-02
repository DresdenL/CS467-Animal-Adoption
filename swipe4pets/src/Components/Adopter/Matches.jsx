import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";

function Matches() {
  // Implement the user portfolio component here

  //TO-DO: matches would be data pulled from the DB
  let list_matches = ["Stella", "Dexter", "Buddy", "Luna", "Max"]
  const [matches, setMatches] = useState(list_matches);

  function removeMatch(item) {
    let updated_matches = matches.filter((name) => {
      return item != name
    })
    setMatches(updated_matches)
  }

  return (
    <ListGroup>
      <h2>Matches</h2>
        {matches.map(item => (
            <ListGroup.Item>
              <Link to="/ViewProfile">{item}</Link>
              <Button onClick={() => removeMatch(item)}>Delete</Button>
            </ListGroup.Item>
        ))}
    </ListGroup>
  );
}



export default Matches; 