import React, {useState} from 'react';
import ProgressBar from '../../progressBar';

function AdopterStep2({phoneNumber, setPhoneNumber, addressLine1, setAddressLine1, addressLine2, setAddressLine2, city, setCity, state, setState, zip, setZip}) {
    return(
        <>
         <h1>Signup</h1>
        <ProgressBar step={2}></ProgressBar>
          <label>Phone Number</label> <br></br>
          <input class="kelly-input" type='tel' id='phone' name='phone' value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} required></input>
          <br></br> <br></br>

          <label>Address</label> <br></br>
          <input class="kelly-input" type='text' id='addressLine1' name='addressLine1' value={addressLine1} onChange={e => setAddressLine1(e.target.value)} placeholder="Street address or P.O. box" required></input>
          <br></br> <br></br>
          <input class="kelly-input" type='text' id='addressLine2' name='addressLine2' value={addressLine2} onChange={e => setAddressLine2(e.target.value)} placeholder="Unit, building, floor, etc." required></input>
          <br></br> <br></br>

          <label>City</label> <br></br>
          <input class="kelly-input" type='text' id='city' name='city' value={city} onChange={e => setCity(e.target.value)} required></input>
          <br></br> <br></br>

          <label>State</label> <br></br>
          <input class="kelly-input" type='text' id='state' name='state' value={state} onChange = {e => setState(e.target.value)} required></input>
          <br></br> <br></br>

          <label>ZIP code</label> <br></br>
          <input class="kelly-input" type='text' id='zip' name='zip' value = {zip} onChange={e => setZip(e.target.value)} required></input>
          <br></br> <br></br>
        </>
    );
}

export default AdopterStep2;