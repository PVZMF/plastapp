import { CircularProgress } from "@mui/material";
import React from "react";

const GlobalSpinner = ({ loading }) => {
  if (loading)
    return (
      <CircularProgress
        size="small"
        sx={{
          position: "absolute",
          fontSize: "25px",
          width: "25px",
          left: "50%",
          top: "50%",
          translate: "-50% -50%",
        }}
      />
    );
  else <></>;
};

export default GlobalSpinner;
