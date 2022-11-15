import logo from './logo.svg';
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
