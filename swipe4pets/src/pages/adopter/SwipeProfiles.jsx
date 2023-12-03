import React, { useState, useMemo, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';
import NavBar from '../../Components/NavBar.jsx';

//Temp
import dog1 from "./../../Components/Adopter/temp/dog_1.jpg";
import dog2 from "./../../Components/Adopter/temp/dog_2.jpg";
import dog3 from "./../../Components/Adopter/temp/dog_3.jpg";
import dog4 from "./../../Components/Adopter/temp/dog_4.jpg";
import dog5 from "./../../Components/Adopter/temp/dog_5.jpg";


const db = [
  {
    id: 1,
    name: "Stella",
    url: dog1,
  },
  {
    id: 2,
    name: "Dexter",
    url: dog2,
  },
  {
    id: 3,
    name: "Max",
    url: dog3,
  },
  {
    id: 4,
    name: "Buddy",
    url: dog4,
  },
  {
    id: 5,
    name: "Luna",
    url: dog5,
  },
];

function ProfileCard(props) {
  return (
    <div>
      <img src={props.image} />
      <div>{props.name}</div>
    </div>
  );
}

function SwipeProfiles() {
  const [currentIndex, setCurrentIndex] = useState(db.length - 1);

  function nextProfile() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }

  function rightSwipe() {
    nextProfile();
  }

  return (
    <div>
      <NavBar />
      <Container>
      <Row className='justify-content-md-center'>
        <Col md={{ span: 1, offset: 2 }}>
          <Button onClick={nextProfile} variant='outline-dark'>
            &#8592;
          </Button>
        </Col>
        <Col md={{ span: 6 }}>
          <ProfileCard
            image={db[currentIndex]["url"]}
            name={db[currentIndex]["name"]}
          />
        </Col>
        <Col>
          <Button onClick={rightSwipe} variant='outline-dark'>
            &#8594;
          </Button>
        </Col>
      </Row>
      <Link to="/AdopterHome"><Button>Back</Button></Link>
    </Container>
    </div>
    
  );
}

export default SwipeProfiles;
