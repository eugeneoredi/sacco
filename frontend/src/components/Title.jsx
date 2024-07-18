// Title.js
{/* <Title>Recent Data</Title> */}
import React from 'react';
import Typography from '@mui/material/Typography';

export default function Title({ children }) {
  return (
    <Typography variant="h6" component="div">
      {children}
    </Typography>
  );
}
