import React, {useEffect} from 'react';
import { Link , useNavigate} from 'react-router-dom';


export default function ShelterSignup() {

  const navigate = useNavigate();

  // initiate step
  let currentStep = 0;


  // function to show the current sign up step, pass function an integer and it will show that step
  const showStep = (n) => {
    let steps = document.getElementsByClassName("shelter-signup-step");
    
    // show step
    steps[n].style.display = "block";

    // check if next button needs to say next or submit
    if (n == (steps.length - 1)) {
      document.getElementById("nextButton").innerHTML = "Submit";
    } else {
      document.getElementById("nextButton").innerHTML = "Next";
    }
  }

  // function to load the next (or previous) step, called by next/submit button
  // next/submit button passes an integer to add to the currentStep, then showStep will be called again
  const nextStep = (n) => {
    let steps = document.getElementsByClassName("shelter-signup-step");

    // hides current step
    steps[currentStep].style.display = 'none';

    // adjusts current step
    currentStep = currentStep + n;

    // checks if it needs to submit or display step
    if (currentStep >= steps.length) {
      alert("Thank you for signing up!");
      navigate("/signup");
      return false;
    } else if (currentStep < 0) {
      navigate("/signup");
      return false;
    } else {
      showStep(currentStep);
    }
  }

  // loads initial step
  useEffect(() => {
    showStep(currentStep);
  });



  return (
    <div class="center">
      <h1>Signup</h1>
      <form id='shelter-signup-form'>
        <div class="shelter-signup-step">
          <h1>Step 2</h1>
          <label>Organization Name</label> <br></br>
          <input type='text' id='org-name' name='org-name' required></input>
          <br></br> <br></br>

          <label>Email</label> <br></br>
          <input type='text' id='email' name='email' required></input>
          <br></br> <br></br>

          <label>Password</label> <br></br>
          <input type='password' id='password' name='password' required></input>
          <br></br> <br></br>
        </div>
        
        <div class="shelter-signup-step">
          <h1>Step 3</h1>
          <label>Phone Number</label> <br></br>
          <input type='text' id='phone' name='phone' required></input>
          <br></br> <br></br>

          <label>Street Address</label> <br></br>
          <input type='text' id='street-address' name='street-address' required></input>
          <br></br> <br></br>

          <label>City</label> <br></br>
          <input type='text' id='city' name='city' required></input>
          <br></br> <br></br>

          <label>State</label> <br></br>
          <input type='text' id='state' name='state' required></input>
          <br></br> <br></br>

          <label>ZIP code</label> <br></br>
          <input type='text' id='zip-code' name='zip-code' required></input>
          <br></br> <br></br>
          </div>

          <div class='signup-buttons'>
          <button type='button' id='backButton' onClick={() => nextStep(-1)}>Back</button>
          &nbsp; &nbsp;
          <button type='button' id='nextButton' onClick={() => nextStep(1)}> Next </button>
          </div>

        
      </form>
    </div>
  );
};