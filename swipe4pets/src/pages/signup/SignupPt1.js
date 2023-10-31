import React from 'react';
import { Link } from 'react-router-dom';

export default function SignupPt1() {

  return (

    <div class="center">
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
          <Link to="/sheltersignup"><button>Shelter</button></Link>

          &nbsp; &nbsp;
          <Link to="/adoptersignup"><button>Adopter</button></Link>
        </div>
      </form>
    </div>
  );
};