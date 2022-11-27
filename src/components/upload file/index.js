import React from "react";
import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";

const UploadFile = ({ index }) => {
  return (
    <>
      <label>بارگزاری فایل {index + 2}</label>
      <AttachFileRoundedIcon />
      <input type="file" name={`document1`} accept="image/*" />
    </>
  );
};

export default UploadFile;
