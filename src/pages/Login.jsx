import React from 'react';
import image from '../assets/login-image.png';
import './login.css';
import LoginInput from '../components/loginInput';

import CustomizedButtons from '../components/loginButton';

function Login() {
  return (
    <div className="login-container">
      <div className="image-container">
        <img className="image" src={image} alt="login image" />
      </div>
      <div className="form">
        <div className="form-box">
          <h1 className="heading">
            Hey,
            <br />
            Let&apos;s Start
          </h1>
          <p>Please Login to your account</p>
          <LoginInput label="Email" type="email" pass={false} />
          <LoginInput label="Password" type="password" pass={true} />
          <a href="https://www.facebook.com" className="forgot-link">
            <p>Forgot password?</p>
          </a>
          <CustomizedButtons />
        </div>
      </div>
    </div>
  );
}

export default Login;
