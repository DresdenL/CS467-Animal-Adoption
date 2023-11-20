import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../../Components/progressBar';
import ProgressBar2 from '../../Components/progressBar2';

// CITATION
// ACCESSED: November 2023
// LINK: https://www.w3schools.com/howto/howto_js_form_steps.asp
// USED: this helped me figure out the implementation of a multi-step form

export default function AdopterSignUp() {

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');


  const addAdopterAccount = async () => {
    const newAdopter = {firstName, lastName, email, password, phoneNumber, addressLine1, addressLine2, city, state, zip};
    const response = await fetch('/api/adopterUser', {
      method: 'POST',
      body: JSON.stringify(newAdopter),
      headers: {'Content-Type': 'application/json'},
    })
    if (response.status === 201) {
      alert("Thank you for signing up! You will be directed to your home page.");
      navigate('/ShelterHome');
    } else {
      alert(`Failed to add account, status code = ${response.status}`);
    }
  };



  // initiate step
  let currentStep = 0;


  // function to show the current sign up step, pass function an integer and it will show that step
  const showStep = (n) => {
    let steps = document.getElementsByClassName("adopter-signup-step");
    
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
    let steps = document.getElementsByClassName("adopter-signup-step");

    // hides current step
    steps[currentStep].style.display = 'none';

    // adjusts current step
    currentStep = currentStep + n;

    // checks if it needs to submit, display step, or navigate back to first signup page
    if (currentStep >= steps.length) {
      // this is PLACEHOLDER currently. eventually it will submit the form and actually sign up user
      // for now it just thanks them for signing up and reroutes to the original signup page
      //alert("Thank you for signing up!");
      navigate("/SignupComplete");
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
      <h1>Sign Up</h1>
      <form>
      <div class="adopter-signup-step">
          <ProgressBar step={1}></ProgressBar>
          <label>First Name</label> <br></br>
          <input id='firstName' name='firstName' value={firstName} onChange = {e => setFirstName(e.target.value)} type='text' required></input>
          <br></br> <br></br>

          <label>Last Name</label> <br></br>
          <input type='text' id='lastName' name='lastName' value={lastName} onChange={e => setLastName(e.target.value)} required></input>
          <br></br> <br></br>

          <label>Email</label> <br></br>
          <input type='email' id='email' name='email' value={email} onChange={e => setEmail(e.target.value)} required></input>
          <br></br> <br></br>

          <label>Password</label> <br></br>
          <input type='password' id='password' name='password' value={password} onChange={e => setPassword(e.target.value)} required></input>
          <br></br> <br></br>
        </div>
        
        <div class="adopter-signup-step">
          <ProgressBar2 step={2}></ProgressBar2>
          <label>Phone Number</label> <br></br>
          <input type='tel' id='phone' name='phone' value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} required></input>
          <br></br> <br></br>

          <label>Address</label> <br></br>
          <input type='text' id='addressLine1' name='addressLine1' value={addressLine1} onChange={e => setAddressLine1(e.target.value)} placeholder="Street address or P.O. box" required></input>
          <br></br> <br></br>
          <input type='text' id='addressLine2' name='addressLine2' value={addressLine2} onChange={e => setAddressLine2(e.target.value)} placeholder="Unit, building, floor, etc." required></input>
          <br></br> <br></br>

          <label>City</label> <br></br>
          <input type='text' id='city' name='city' value={city} onChange={e => setCity(e.target.value)} required></input>
          <br></br> <br></br>

          <label>State</label> <br></br>
          <input type='text' id='state' name='state' value={state} onChange = {e => setState(e.target.value)} required></input>
          <br></br> <br></br>

          <label>ZIP code</label> <br></br>
          <input type='text' id='zip' name='zip' value = {zip} onChange={e => setZip(e.target.value)} required></input>
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