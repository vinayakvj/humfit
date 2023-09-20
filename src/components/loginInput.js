import React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import './login-input.css';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function LoginInput({ label, type, pass }) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  /*   const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
   */

  return (
    <div className="input-field">
      <label>{label}</label>
      <div className="input-container">
        <OutlinedInput
          sx={{ height: '52px', width: '100%' }}
          type={type === 'email' ? null : showPassword ? 'email' : 'password'}
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
      </div>
    </div>
  );
}

export default LoginInput;
