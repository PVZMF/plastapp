import React from 'react';

import { Routes, Route } from "react-router-dom";

// componenets
import Layout from "./componets/layout";

// style 
import './App.css';
import { ThemeProvider, Typography } from '@mui/material';
import theme from "./themes/theme"

function App() {

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography>
          
        </Typography>
      </ThemeProvider>
    </div>
  );
}

export default App;
