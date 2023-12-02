import React, { useState, useMemo, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import profile_pic from "./../../Components/Adopter/temp/dog.png";
import NavBar from '../../Components/NavBar.jsx';

const db = [
  {
    name: "Stella",
    url: profile_pic,
  },
  {
    name: "Dexter",
    url: profile_pic,
  },
  {
    name: "Max",
    url: profile_pic,
  },
  {
    name: "Buddy",
    url: profile_pic,
  },
  {
    name: "Luna",
    url: profile_pic,
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
    </Container>
    </div>
  );
}

export default SwipeProfiles;
