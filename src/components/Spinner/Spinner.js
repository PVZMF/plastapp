import { style } from "@mui/system";
import React from "react";
import styleSpinner from "./spinner.module.css";
const Spinner = () => {
  return (
    <>
      <div className={styleSpinner.container}>
        <div className={styleSpinner.loader}></div>
      </div>
    </>
  );
};

export default Spinner;
