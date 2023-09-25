import React, { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import './login-input.css';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function LoginInput({ label, type, pass }) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const emailValidation = (e) => {
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var emailValue = e.target.value;
    setEmail(emailValue);
    if (email.match(pattern)) {
      console.log(true);
      setMessage('valid');
    } else {
      console.log(false);
      setMessage('invalid');
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  /*   const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
   */

  /* function handleChange(e) {
    setEmail(e.target.value);
  } */

  return (
    <div className="input-field">
      <label data-testid="custom">
        {label}
        <div className="input-container">
          <OutlinedInput
            sx={{
              height: '52px',
              width: '100%',
              '@media screen and (max-width: 600px)': {
                width: '300px'
              }
            }}
            type={type === 'email' ? null : showPassword ? 'email' : 'password'}
            onChange={type === 'email' ? emailValidation : null}
            endAdornment={
              pass ? (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ) : null
            }
          />
          {pass ? null : email === '' ? null : message === 'valid' ? (
            <p data-testid="valid" className="valin valid">
              Valid
            </p>
          ) : (
            <p data-testid="hi" className="valin invalid">
              Invalid
            </p>
          )}
        </div>
      </label>
    </div>
  );
}

export default LoginInput;
