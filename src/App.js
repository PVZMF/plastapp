import React from 'react';

// import {RouterProvider, Routes, Route } from "react-router-dom";

// componenets
import Layout from "./componets/layout";

// style 
import './App.css';
import { ThemeProvider, Typography } from '@mui/material';
import theme from "./themes/theme"
import Router from './routes/routes';

function App() {

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Layout>

        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
