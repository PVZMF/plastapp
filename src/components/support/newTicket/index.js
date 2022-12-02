import React, { useState } from "react";
import style from "./style.module.css";
import { MenuItem, Select, TextField } from "@mui/material";
import UploadFile from "../../upload file";
import { createTicket } from "../../../api/api";
const NewTicketComponent = () => {
  const [fileIndex, setFileIndex] = useState(1);
  const [fileInputs, setFileInputs] = useState([<UploadFile index={0} />]);

  const hanldeSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    function prepareDocumentArray() {
      let fileArray = [];
      for (let i = 0; i < fileIndex; i++) {
        fileArray.push(data[`document${i}`]);
      }
      return fileArray;
    }

    let requestData = {
      title: data.title,
      user: 1,
      status: "unread",
      priority: data.priority,
      ticket_number: 1,
      document: prepareDocumentArray(),
      message: data.message,
    };

    console.log(data);
    console.log(requestData);
    createTicket(requestData);
  };

  function addInput() {
    setFileIndex((prev) => (prev += 1));
    setFileInputs((prev) => [...prev, <UploadFile index={fileIndex} />]);
  }

  return (
    <div className={style.newticket}>
      <div className={style.box_ticket}>
        <div className={style.header_tikes}>
          <h4>ثبت درخواست جدید</h4>
        </div>

        <form onSubmit={hanldeSubmit} enctype="multipart/form-data">
          <div
            className={style.box_input}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextField
              name="title"
              type="text"
              label="عنوان"
              sx={{ width: "70%" }}
            />
            <Select
              name="priority"
              sx={{ width: "20%" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="اولویت"
            >
              <MenuItem value={"high"}>بالا</MenuItem>
              <MenuItem value={"medium"} selected={true}>
                متوسط
              </MenuItem>
              <MenuItem value={"low"}>پایین</MenuItem>
            </Select>
          </div>
          <div className={style.box_input}>
            <textarea placeholder="متن پیام شما..." name="message" />
          </div>
          <div
            onClick={addInput}
            className={style.plusButton}
            style={{
              width: "40px",
              height: "40px",
              fontSize: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              color: "#428aca",
            }}
          >
            +
          </div>
          <div className={style.lowerContainer}>
            <div className={style.footer}>
              <div className={style.import}>
                {fileInputs.map((el) => el)}
                <p>حجم فایل نباید بیشتر از 400 کیلوبایت باشد</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <button type="sumbit" className={style.submitButton}>
                ثبت
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTicketComponent;
