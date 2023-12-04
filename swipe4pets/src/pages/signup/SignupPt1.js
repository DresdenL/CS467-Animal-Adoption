import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import ProgressBar from "../../Components/progressBar";
import NavBar from "../../Components/NavBar.jsx";

export default function SignupPt1() {
  const navigate = useNavigate();

  const [accountType, setAccountType] = useState("");

  // Function navigates to either shelter or adoption page, based on button selection
  const nextPage = () => {
    if (accountType === 'shelter') {
      navigate("/sheltersignup");
    } else if (accountType === 'adopter') {
      navigate("/adoptersignup");
    } else {
      alert("ERROR: Select account type");
    }
  };

  const button = document.getElementsByClassName("choice-button");

  const choiceClick = (n) => {
    if (n === 0) {
      if (accountType === 'shelter') {
        button[0].classList.toggle('active')
      } else if (accountType === 'adopter') {
        button[1].classList.toggle('active');
        button[0].classList.toggle('active')
        setAccountType('shelter');
      } else {
        button[0].classList.toggle('active')
        setAccountType('shelter');
      }
    }
  if (n === 1) {
    if (accountType === 'adopter') {
      button[1].classList.toggle('active')
    } else if (accountType === 'shelter') {
      button[0].classList.toggle('active');
      button[1].classList.toggle('active')
      setAccountType('adopter');
    } else {
      button[1].classList.toggle('active')
      setAccountType('adopter');
    }
  } 
  }

  return (
    <div class='center'>
      <NavBar />
      <h1>Sign Up</h1>
      <form>
        <div class='signup'>
          <h1>
            <ProgressBar step={0} />
          </h1>
          <label>Select One</label>
          <br></br>
          <button class="choice-button"
            type='button'
            id='shelterType'
            onClick={() => choiceClick(0)}
          >
            Shelter
          </button>
          <br></br> <br></br>
          <button class="choice-button"
            type='button'
            id='adopterType'
            onClick={() => choiceClick(1)}
          >
            Adopter
          </button>
          <br></br>
          <br></br>
          <Link to='/'>
            <button class="kelly-button">Back</button>
          </Link>
          &nbsp; &nbsp;
          <button type='button' id='nextButton' class="kelly-button" onClick={() => nextPage()}>
            {" "}
            Next{" "}
          </button>
        </div>
      </form>
    </div>
  );
}
