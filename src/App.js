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
        <img className="logo" src="https://cdn.discordapp.com/attachments/1215365922814955520/1223324390943363104/Group_408.png?ex=6619709f&is=6606fb9f&hm=07fa33f74dee3f66bd550e41aa78af2079ae3d2f9881a04c38bc0e4484f44fc2&" alt="" /></div>
      <h1 className='heading'>Log In</h1>
      
      <div className="social-media">
        <div className="google"> 
        <img src="https://cdn.discordapp.com/attachments/1215365922814955520/1223324391161594020/Logo.png?ex=6619709f&is=6606fb9f&hm=4d0b1fa0ae35b78063267650dc3cb1482c2831efecfd0909ae8f25bf7e851e15&" alt="" />  Google
        </div>
        <div className="fb"><img src="https://cdn.discordapp.com/attachments/1215365922814955520/1223324391379566756/logo_1.png?ex=6619709f&is=6606fb9f&hm=e05268c92eb4c5ecd1ce1a11d826e222d03a7d39e2c4366e49299564fd5c3123&" alt="" /> Facebook</div>
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
          <img src="https://cdn.discordapp.com/attachments/1215365922814955520/1223324390683312260/Illustration.png?ex=6619709f&is=6606fb9f&hm=d07719dc92676a498eebf908443efe074cbc8806b96d715af7de57060c22aaed&" alt="Img" />
        </div>

      </div>


    </>
  );
}

export default App;
