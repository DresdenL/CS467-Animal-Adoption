import React from 'react';
import {useNavigate} from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (

    <>
    <head>
      <h1>Swipe4Pets Home Page</h1>
    </head>
    <body>
      <center>
      <h1>Welcome to Swipe4Pets! <br></br> Lets find your pawfect match.</h1>
      
      <br></br>
      <button onClick={() => { navigate('/login'); } }> Login</button> 
      <br></br> <br></br>
      <button onClick={() => { navigate('/signup'); } }> Sign Up</button>
    </center>
    </body>
    </>


  );
};

export default Home;