import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./App.css";

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  };


  const handleLogin = (e) => {
    console.log('Username:', username);
    console.log('Password:', password);

    setUsername('');
    setPassword('');
  };

  return (
    <>
      <div className="logo-container">
        <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9wppjcCkilEavui6RyxtUsYFLkWNorWwGsQ&s" alt="" /></div>
      <h1 className='heading'>Log In</h1>
      <div className="social-media">
        <div className="google"><i class="fa-brands fa-google"></i> Google </div>
        <div className="fb"><i class="fa-brands fa-facebook-f"></i>  Facebook</div>
      </div>

      <div className="horizontal-line"></div>

      <div class="container">
        <div class="login-form">
          <form onSubmit={handleLogin}>
            <div className="input-container">
              <label>Username </label>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
              <label>Password </label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className='remberme'>
              <label>Remember Me
              </label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={handleCheckboxChange}
              />
            </div>
            <button type="submit">Login</button>
            <p>Do not have Account yet?</p>
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
