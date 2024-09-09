
import * as React from 'react';
import { Box, Button, Typography, Alert } from '@mui/material';


export const BoxContainer = ({ children }) => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    height="100vh"
  >
    {children}
  </Box>
);

export const LabelDisplay = ({ child }) => (
  <Typography variant="h4" gutterBottom>
    {child}
  </Typography>
);

export const CountDisplay = ({ count }) => (
  <Typography variant="h2" sx={{ fontFamily: 'math' }} gutterBottom>
    {count}
  </Typography>
);

export const BoxList = ({ children }) => (
  <Box display="flex" gap={2}>
    {children}
  </Box>
);

export const ButtonDisplay = ({ label, onClick, color }) => (
  <Button
    variant="contained"
    color={color || "primary"}
    onClick={onClick}
  >
    {label}
  </Button>
);

export const ErrorMessage = ({ message }) => (
  <Alert severity="warning" sx={{ marginBottom: 2, borderRadius: '10px' }}>
    {message}
  </Alert>
);