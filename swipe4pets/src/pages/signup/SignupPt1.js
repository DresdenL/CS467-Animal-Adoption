import React from 'react';
import {useNavigate} from 'react-router-dom';

const SignupPt1 = () => {
  const navigate = useNavigate();

  return (

    <>
    <head>
          <h1>Signup: First Page</h1>
      </head>
     <body> <center>
        <h1>Sign Up</h1>
      <form>
              <div class="signup">
                <label>Select One</label>
                <br></br>
                <input type='radio' id='shelterAcct' name='accountType' value='shelterAcct'></input>
                <label for='shelterAcct'>Shelter</label> &nbsp; &nbsp;
                <input type='radio' id='adopterAcct' name='accountType' value='adopterAcct'></input>
                <label for='adopterAcct'>Adopter</label>
                <br></br>
                  <label>Email</label><br></br>
                  <input type='text' name='signup-email' required></input> <br></br>
                  <label>Password</label><br></br>
                  <input type='password' name='signup-password' required></input> <br></br> <br></br>
                  <button>Continue</button>

                <br></br> <br></br>
                <button onClick={() => {navigate('/sheltersignup')}}> shelter</button> 
                &nbsp; &nbsp;
                <button onClick={() => {navigate('/adoptersignup')}}> adopter</button>
              </div>
          </form>
          </center>
          </body> 
          </>


  );
};

export default SignupPt1;