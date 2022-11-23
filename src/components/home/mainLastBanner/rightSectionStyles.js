export const containerStyles = {
    borderRadius: "20px",
    overFlow: "hidden",
    display: "flex",
    alignItems: "center",
    "@media screen and (max-width: 892px)": {
      margin: "0 auto 5px auto",
    },
    "@media screen and (max-width: 600px)": {
      flexDirection: "column",
    }
  },
  logoContainer = {
    height: "45px",
    display: "flex",
    alignItems: "center",

    "> h3": {
      "@media screen and (max-width: 700px)": {
        fontSize: "1.3rem",
      },
    },
    "@media screen and (max-width: 600px)": {
      padding: "0 0 0 5px",
      height: "clamp(10px,5vw,60px)",
    },
  };
