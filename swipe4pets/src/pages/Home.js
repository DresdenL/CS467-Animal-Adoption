import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar.jsx";

export default function Home() {
  return (
    <div class='center'>
      <NavBar />
      <h1>
        Welcome to Swipe4Pets! <br></br> Lets find your pawfect match.
      </h1>
      <br></br>
      <Link to='/login'>
        <button class="kelly-button">Login</button>
      </Link>
      <br></br> <br></br>
      <Link to='/signup'>
        <button class="kelly-button">Sign Up</button>
      </Link>
      <br></br> <br></br>
      <Link to="/backendtest"><button>Backend Test</button></Link>
      <br></br> <br></br>
      <Link to="/imageuploadtest"><button>Image Upload Test</button></Link>
      <Link to='/backendtest'>
        <button class="kelly-button">Backend Test</button>
      </Link>
    </div>
  );
}
