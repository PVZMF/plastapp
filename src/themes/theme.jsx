import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: 'IranSans',
    fontStyle: "normal",
    fontWeight: "normal",
    src: "./assets/font/iranSans/IRANSans-Medium-web.woff2"

  },

  components: {
    // Name of the component
    MuiListItemText: {

      styleOverrides: {
        span: {
          fontSize: '1.2rem',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
          @font-face {
            font-family: 'IranSans';
            font-style: normal;
            font-weight: normal;
            src: url("./assets/font/iranSans/IRANSans-Medium-web.eot"); /* IE9 Compat Modes */
            src: url("./assets/font/iranSans/IRANSans-Medium-web.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
                 url("./assets/font/iranSans/IRANSans-Medium-web.otf") format("opentype"), /* Open Type Font */
                 url("./assets/font/iranSans/IRANSans-Medium-web.svg") format("svg"), /* Legacy iOS */
                 url("./assets/font/iranSans/IRANSans-Medium-web.ttf") format("truetype"), /* Safari, Android, iOS */
                 url("./assets/font/iranSans/IRANSans-Medium-web.woff") format("woff"), /* Modern Browsers */
                 url("./assets/font/iranSans/IRANSans-Medium-web.woff2") format("woff2"); /* Modern Browsers */
          }
        `,
    },

    MuiLink: {
      styleOverrides: `
        color: inherit;
        text-decoration: none;
        outline: none;
      `
    }
  },
});

export default theme