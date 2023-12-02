import React, {useState} from 'react';
import ProgressBar from '../../progressBar';

function AdopterStep1({firstName, lastName, email, password, setFirstName, setLastName, setEmail, setPassword}) {
    return(
        <>
         <h1>Signup</h1>
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
        </>
    );
}

export default AdopterStep1;