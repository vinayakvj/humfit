import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: '#4B934B',
  borderRadius: '25px',
  width: '400px',
  height: '50px',
  '&:hover': {
    backgroundColor: '#013220'
  }
}));

export default function CustomizedButtons() {
  return (
    <Stack spacing={2} direction="row">
      <ColorButton variant="contained">Login</ColorButton>
    </Stack>
  );
}
