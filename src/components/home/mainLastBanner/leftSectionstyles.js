export const containerStyles = {
    display: "flex",
    alignItems: "center",
    "@media screen and (max-width: 892px)": {
      margin: "auto",
    },
  },
  moreIconStyles = {
    height: "30px",
    width: "30px",
    padding: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
  },
  downloadsContainerStyles = {
    margin: "0 15px",
    display: "flex",
    flexWrap: "nowrap",
    alignItems: "center",
    "@media screen and (max-width: 426px)": {
      margin: "0 2px",
    },
    "> div": {
      margin: "0 7px",
      height: "30px",
      cursor: "pointer",
      "@media screen and (max-width: 700px)": {
        margin: "0 2px 7px 0",
      },
    },
  };
