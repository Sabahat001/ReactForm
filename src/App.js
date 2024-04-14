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
      <div className="container">
       <div className="login-form">
          <img className="logo" src="https://cdn.discordapp.com/attachments/1215365922814955520/1223324390943363104/Group_408.png?ex=662be59f&is=6619709f&hm=e076651ef674b31f7fc2bec92d7e4575b33a4fdeed0fcd9326d89e0ab6b24d19&" alt="" />
          <h1 className='heading'>Log in</h1>

          <div className="social-media">
            <div className="google">
              <img src="https://cdn.discordapp.com/attachments/1215365922814955520/1223324391161594020/Logo.png?ex=662be59f&is=6619709f&hm=f24f094423dc197bd97655c187f3b1d6e71e1b10a60571567fbdbcda7bf96b36&" alt="" />  Google
            </div>
            <div className="fb">
              <img src="https://cdn.discordapp.com/attachments/1215365922814955520/1223324391379566756/logo_1.png?ex=662be59f&is=6619709f&hm=5ecc3ae3ad7721ad9ab5a92d4f2d4799479df07d757d656719941d14ff80af45&" alt="" />  Facebook</div>
          </div>

          <div className="lines">
            <div className="horizontal-line"></div>
            <div className="or">Or</div>
            <div className="horizontal-line-1"></div>
          </div>
       
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
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={handleCheckboxChange}
              /> <label>Remember Me
              </label>
            </div>

            <button type="submit">Login</button>
           <div className="paragraph">
           <p className='paragraph'>Do not have Account yet? </p>
            <p className='paragraph para2'>  New Account</p>
           </div>
          </form>
          </div>

        <div className="login-img">
          <img className='new-img'  src='https://cdn.discordapp.com/attachments/1215365922814955520/1223324390683312260/Illustration.png?ex=662be59f&is=6619709f&hm=e6dd4af3e71bd84bd0af68c108d22e93804e50a8d5992a9fa56fd492912db52c&' alt="" />
        </div>

      </div>
    </>
  );
}

export default App;


{/* <div className="logo-container">
        <img className="logo" src="https://cdn.discordapp.com/attachments/1215365922814955520/1223324390943363104/Group_408.png?ex=6619709f&is=6606fb9f&hm=07fa33f74dee3f66bd550e41aa78af2079ae3d2f9881a04c38bc0e4484f44fc2&" alt="" /></div>
      <h1 className='heading'>Log In</h1>

      <div className="social-media">
        <div className="google">
          <img src="https://cdn.discordapp.com/attachments/1215365922814955520/1223324391161594020/Logo.png?ex=6619709f&is=6606fb9f&hm=4d0b1fa0ae35b78063267650dc3cb1482c2831efecfd0909ae8f25bf7e851e15&" alt="" />  Google
        </div>
        <div className="fb"><img src="https://cdn.discordapp.com/attachments/1215365922814955520/1223324391379566756/logo_1.png?ex=6619709f&is=6606fb9f&hm=e05268c92eb4c5ecd1ce1a11d826e222d03a7d39e2c4366e49299564fd5c3123&" alt="" />  Facebook</div>
      </div>
      <div className="container">
    <div className="horizontal-line"></div>
    <div className="or">Or</div>
    <div className="horizontal-line-1"></div>
  </div>

      <div className="container-wrapper">
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
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={handleCheckboxChange}
                /> <label>Remember Me
                </label>
              </div>

              <button type="submit">Login</button>
              <p>Do not have Account yet?</p>
            </form>
          </div>
        </div>
      

      <div className="container">
        <div class="image">
          <img src="https://cdn.discordapp.com/attachments/1215365922814955520/1223324390683312260/Illustration.png?ex=6619709f&is=6606fb9f&hm=d07719dc92676a498eebf908443efe074cbc8806b96d715af7de57060c22aaed&" alt="Img" />
        </div>
      </div>

      </div> */}
