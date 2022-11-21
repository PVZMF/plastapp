import React from 'react';

import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';

// componenets
import Router from './routes/routes';
import store from './toolkit/store';
import Layout from "./components/layout";

// style 
import theme from "./themes/theme"
import './App.css';

function App() {

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <RouterProvider router={Router} />
        </Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
