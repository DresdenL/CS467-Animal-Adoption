import React from 'react';
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <><head>
          <h1>Login</h1>
      </head>
     <body> <center>
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
          </center>
          </body> </>

  );
};

export default Login;