import React from "react";
import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";

const UploadFile = ({ index }) => {
  return (
    <div
      style={{ display: "flex", alignItems: "center", marginBottom: "2rem" }}
    >
      <label>بارگزاری فایل {index + 1}</label>
      <AttachFileRoundedIcon />
      <input type="file" name={`document${index}`} accept="image/*" />
    </div>
  );
};

export default UploadFile;
