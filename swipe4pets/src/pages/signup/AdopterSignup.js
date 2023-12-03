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
  const [passHere, setPassHere] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  
  // when 'submit' is selected, this handles creating the new account
  // currently only stores firstName,lastName, email, and phone number. 
  const addAdopterAccount = async() => {
    const newAdopter = {
      firstName,
      lastName,
      email,
      //passHere,
      phoneNumber
      //addressLine1,
      //addressLine2,
      //city,
      //state,
      //zip,
    };
    const response = await fetch("/api/adopterUser", {
      method: "POST",
      body: JSON.stringify(newAdopter),
      headers: { 'Content-Type': 'application/json' },
    });
    const result = await response.json()
    if (result.account_created === "success") {
      alert(
        "Thank you for signing up!"
      );
    }
  };

  // initiate first step
  const [currentStep, setStep] = useState(0)

  // function to show the current sign up step. this is based off variable currentStep, and will return the component associated with that step. 
  // functin will also handle reassignment of next/submit button 
  const showStep = () => {
    let signup_buttons = document.getElementsByClassName("signup-buttons");
    // first step
    if (currentStep === 0) {
      document.getElementById("nextButton").innerHTML = "Next";
      return <AdopterStep1 firstName={firstName} lastName={lastName} email={email} passHere={passHere} setFirstName={setFirstName} setLastName={setLastName} setEmail={setEmail} setPassHere={setPassHere} />;
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
    if (currentStep === 0) {
      navigate("/signup");
      return false;
    } else {
    setStep(currentStep - 1);
  }
}
  
  // event handler for hitting next button; checks if all fields are filled out and whether account was successfully added. 
  const nextStep = () => {
    if (currentStep === 1) {
      if (checkStep(1)) {
        addAdopterAccount()
          .catch(error => {
            alert('Failed to create account, please try again')
            navigate("/signup");
          }
        )
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

  // function checks to make sure the current step was completed (all fields filled out )
  const checkStep = (step) => {
    if (step === 0) {
      if (
        firstName === "" ||
        lastName === "" ||
        email === "" ||
        passHere === ""
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
