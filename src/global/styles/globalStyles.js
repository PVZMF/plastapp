import { Global, css } from "@emotion/react";

export const globalCssVar = {
  fontSize: "10px",
  primary_black: "#333",
  primary_light: "#c9dae2",
  primary_blue: "#69a9ff",
  light_blue: "#f1f9fc",
  primary_white: "#ffffff",
};

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }

        :root {
          --primary-black: #333;
          --primary-light: #c9dae2;
          --primary-blue: #69a9ff;
          --light-blue: #f1f9fc;
          --primary-white: #ffffff;
          --light-banner-red: rgb(215, 77, 77);
        }

        html {
          font-size: 10px;
          direction: rtl;
        }

        @media screen and (max-width: 600px) {
          html {
            font-size: 9px;
          }
        }

        body {
          font-family: "IRANSans-Medium" !important;
        }

        img {
          display: block;
          width: 100%;
        }

        a {
          color: inherit;
          text-decoration: none;
          outline: none;
        }

        button {
          all: unset;
        }

        ul,
        li {
          list-style-type: none;
        }

        input {
          all: unset;
          background: var(--primary-white);
          outline: none;
          padding: 0px 7px;
          font-size: 1.4rem;
        }

        figure {
          all: unset;
        }

        .text-white {
          color: var(--primary-white) !important;
        }

        .d_flex--1 {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }

        .rounded-1 {
          border-radius: 7px !important;
        }

        .rounded-2 {
          border-radius: 10px !important;
        }

        .hidden {
          overflow: hidden !important;
        }

        .p10 {
          padding: 10px !important;
        }
      `}
    />
  );
}

// .test {
//   background-color: #333;
//   color: #fff;
//   @media only screen and (max-width: 650px) {
//   }
// }
