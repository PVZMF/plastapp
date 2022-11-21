import React from 'react';

import { RouterProvider } from "react-router-dom";


// style 
import './App.css';
import { ThemeProvider } from '@mui/material';
import theme from "./themes/theme"
import Router from './routes/routes';

function App() {

  return (
      <ThemeProvider theme={theme}>
        <RouterProvider router={Router} />
      </ThemeProvider>
  );
}

export default App;
