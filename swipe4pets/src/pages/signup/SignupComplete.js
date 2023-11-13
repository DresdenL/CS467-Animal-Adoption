import React from 'react';
import { Link } from 'react-router-dom';
import ProgressBar2 from '../../Components/progressBar2';

export default function SignupComplete() {

  return (
    <div class="center">
      <h1>Complete!</h1>
      <br></br>
      <ProgressBar2 step={3}></ProgressBar2>
      <br></br>
      <Link to="/"><button>Continue</button></Link>
    </div>
  );
};
