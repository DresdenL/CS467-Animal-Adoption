import React from "react";
import { Link } from "react-router-dom";
import ProgressBar2 from "../../Components/progressBar2";
import NavBar from "../../Components/NavBar.jsx";

export default function SignupComplete() {
  return (
    <div class='center'>
      <NavBar />
      <h1>Complete!</h1>
      <br></br>
      <ProgressBar2 step={3}></ProgressBar2>
      <br></br>
      <Link to='/'>
        <button>Continue</button>
      </Link>
    </div>
  );
}
