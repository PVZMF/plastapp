import React from 'react';
import { ThemeProvider } from '@mui/material';
import theme from "./themes/theme"
import router from "./routes/routes"
import {RouterProvider} from "react-router-dom";

function App() {

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router}/>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
