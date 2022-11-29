import React from 'react';

import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import {persistor} from "./toolkit/store"
// componenets
import Router from './routes/routes';
import store from './toolkit/store';
import Layout from "./components/layout";

// style 
import theme from "./themes/theme"
import './App.css';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<div>...loading</div>}>
          <RouterProvider router={Router} />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
