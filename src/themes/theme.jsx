import IranSans from "../assets/font/iranSans/IRANSans-Medium-web.woff2"
import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
      fontFamily: 'IranSans, Arial',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'IranSans';
            font-style: normal;
            font-weight: normal;
            src: url(${IranSans}) format('woff2');
          }
        `,
      },
    },
  });

  export default theme