import React from 'react';
import image from '../assets/login-image.png';
import './login.css';
import LoginInput from '../components/loginInput';
import { useNavigate } from 'react-router-dom';
import CustomizedButtons from '../components/loginButton';

function Login() {
  const nav = useNavigate();

  const handleClick = () => {
    nav('./dashboard/student');
  };

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
          <div onClick={handleClick}>
            <CustomizedButtons />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
