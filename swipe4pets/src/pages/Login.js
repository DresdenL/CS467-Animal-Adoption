import React from 'react';

export default function Login() {

  return (
    <div class="center">
      <h1>Login</h1>
      <form>
        <div class="login">
          <label>Email</label><br></br>
          <input type='text' name='login-email' required></input> <br></br>
          <label>Password</label><br></br>
          <input type='password' name='login-password' required></input> <br></br> <br></br>
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  );
};