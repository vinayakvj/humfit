import React from 'react';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import './navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-box">
        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
      </div>
    </div>
  );
}

export default Navbar;
