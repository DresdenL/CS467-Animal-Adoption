import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar.jsx";

export default function ManageShelterAccount() {
  return (
    <div class='center'>
      <NavBar />
      <h1>Manage Shelter Account</h1>
      <form>
        <div class='shelter-signup'>
          <label>Phone Number</label> <br></br>
          <input
            type='text'
            id='phone-number'
            name='phone-number'
            placeholder='555-555-5555'
          ></input>
          <br></br> <br></br>
          <label>Street Address</label> <br></br>
          <input
            type='text'
            id='street-address'
            name='street-address'
            placeholder='77 circle dr'
          ></input>
          <br></br> <br></br>
          <label>City</label> <br></br>
          <input
            type='text'
            id='city'
            name='city'
            placeholder='New York'
          ></input>
          <br></br> <br></br>
          <label>State</label> <br></br>
          <input
            type='text'
            id='state'
            name='state'
            placeholder='New York'
          ></input>
          <br></br> <br></br>
          <label>ZIP code</label> <br></br>
          <input
            type='text'
            id='zip-code'
            name='zip-code'
            placeholder='55555'
          ></input>
          <br></br> <br></br>
          <label>Update Password</label> <br></br>
          <input
            type='password'
            id='password'
            name='password'
            placeholder='**********'
          ></input>
          <br></br> <br></br>
          <label>Update Email</label> <br></br>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='shelter@shelter.com'
          ></input>
          <br></br> <br></br>
          <Link to='/shelterHome'>
            <button type='submit'>Submit changes</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
