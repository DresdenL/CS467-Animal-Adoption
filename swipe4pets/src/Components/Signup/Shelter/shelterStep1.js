import React, {useState} from 'react';
import ProgressBar from '../../progressBar';

function ShelterStep1({organizationName, email, password, setOrganizationName, setEmail, setPassword}) {
    return(
        <>
         <h1>Signup</h1>
        <ProgressBar step={1}></ProgressBar>
          <label>Organization Name</label> <br></br>
          <input class="kelly-input" type='text' id='organization' name='organizationName' value={organizationName} onChange={e => setOrganizationName(e.target.value)} required></input>
          <br></br> <br></br>

          <label>Email</label> <br></br>
          <input class="kelly-input" type='text' id='email' name='email' value={email} onChange={e => setEmail(e.target.value)} required></input>
          <br></br> <br></br>

          <label>Password</label> <br></br>
          <input class="kelly-input" type='password' id='password' name='password' value={password} onChange={e => setPassword(e.target.value)} required></input>
          <br></br> <br></br>
        </>
    );
}

export default ShelterStep1;