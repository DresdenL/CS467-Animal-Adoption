import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../../Components/progressBar';
import ProgressBar2 from '../../Components/progressBar2';
import AdopterStep1 from '../../Components/Signup/Adopter/adopterStep1';
import AdopterStep2 from '../../Components/Signup/Adopter/adopterStep2';
import CompleteSignup from '../../Components/completeSignup';
import NavBar from "../../Components/NavBar.jsx";

// CITATION
// ACCESSED: November 2023
// LINK: https://www.w3schools.com/howto/howto_js_form_steps.asp
// USED: this helped me figure out the implementation of a multi-step form

export default function AdopterSignUp() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const addAdopterAccount = async () => {
    const newAdopter = {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      addressLine1,
      addressLine2,
      city,
      state,
      zip,
    };
    const response = await fetch("/api/adopterUser", {
      method: "POST",
      body: JSON.stringify(newAdopter),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 201) {
      alert(
        "Thank you for signing up! You will be directed to your home page."
      );
      navigate("/ShelterHome");
    } else {
      alert(`Failed to add account, status code = ${response.status}`);
    }
  };

  // initiate step
  const [currentStep, setStep] = useState(0)

  // function to show the current sign up step, pass function an integer and it will show that step
  const showStep = () => {
    let signup_buttons = document.getElementsByClassName("signup-buttons");
    // first step
    if (currentStep === 0) {
      document.getElementById("nextButton").innerHTML = "Next";
      return <AdopterStep1 firstName={firstName} lastName={lastName} email={email} password={password} setFirstName={setFirstName} setLastName={setLastName} setEmail={setEmail} setPassword={setPassword} />;
    // second step
    } else if (currentStep === 1) { 
      document.getElementById("nextButton").innerHTML = "Submit";
      return  <AdopterStep2 phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} addressLine1={addressLine1} setAddressLine1={setAddressLine1} addressLine2={addressLine2} setAddressLine2={setAddressLine2} city={city} setCity={setCity} state={state} setState={setState} zip={zip} setZip={setZip} />;
    // finished page
    } else if (currentStep === 2) {
      signup_buttons[0].style.display = 'none';
      return  <CompleteSignup accountType={1} />;
    }
  };


  // event handler for hitting back button
  const prevStep = () => {
    setStep(currentStep - 1);
      if (currentStep < 0) {
        navigate("/signup");
        return false;
      } else {
        return false;
      }
  }
  
  // event handler for hitting next button; checks if all fields are filled out 
  const nextStep = () => {
    if (currentStep === 1) {
      if (checkStep(1)) {
        setStep(currentStep + 1);
      } else {
        alert("Missing fields");
        return false;
      }
    } else if (currentStep === 0){
      if (checkStep(0)) {
        setStep(currentStep + 1);
      } else {
        alert("Missing fields");
        return false;
      }
    }
  };

  const checkStep = (step) => {
    if (step === 0) {
      if (
        firstName === "" ||
        lastName === "" ||
        email === "" ||
        password === ""
      ) {
        return false;
      } else {
        return true;
      }
    }
    if (step === 1) {
      if (
        phoneNumber === "" ||
        addressLine1 === "" ||
        addressLine2 === "" ||
        city === "" ||
        state === "" ||
        zip === ""
      ) {
        return false;
      } else {
        return true;
      }
    }
  };

  return (
    <div class="center">
            {showStep()}

        <div class='signup-buttons'>
        <button type='button' id='backButton' class="kelly-button" onClick={() => prevStep()}>Back</button>
        &nbsp; &nbsp;
        <button type='button' id='nextButton' class="kelly-button" onClick={() => nextStep()}> Next </button>
        </div>

    </div>
  );
}
