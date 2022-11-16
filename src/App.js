import React from 'react';

import { RouterProvider } from "react-router-dom";

// componenets
import Layout from "./componets/layout";

// style 
import './App.css';
import { ThemeProvider } from '@mui/material';
import theme from "./themes/theme"
import Router from './routes/routes';

function App() {

  return (
    <div>
      <ThemeProvider theme={theme}>
        <RouterProvider router={Router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
