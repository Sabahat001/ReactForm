import React, { useState } from 'react';
import "./App.css";

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [rememberMe, setRememberMe] = useState(false);

  // const handleCheckboxChange = () => {
  //   setRememberMe(!rememberMe);
  // };

  
  const handleLogin = (e) => {
    console.log('Username:', username);
    console.log('Password:', password);

    setUsername('');
    setPassword('');
  };

  return (
    <>
    <h1 className='heading'>Log In</h1>
    <div class="container">

    <div class="login-form">
      <form  onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          required
        />
         {/* <div>
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={handleCheckboxChange}
            />Remember Me
          </label>
        </div> */}
        <button type="submit">Login</button>
      </form>

   </div>
  <div class="image">
    <img src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=" alt="Img" />
  </div>
</div>


</>
  );
}

export default App;
