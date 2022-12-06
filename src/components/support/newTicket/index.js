import React, { useState } from "react";
import style from "./style.module.css";
import { MenuItem, Select, TextField } from "@mui/material";
import UploadFile from "../../upload file";
import { createTicket } from "../../../api/api";
import axios from "axios";
import Storage from "../../../service/Storage";
import Spinner from "../../Spinner/Spinner";

const NewTicketComponent = () => {
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");

  const [fileIndex, setFileIndex] = useState(1);
  const [fileInputs, setFileInputs] = useState([<UploadFile index={0} />]);
  const st = Storage();
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
      // user: 1,
      //status: "unread",
      priority: data.priority,
      // ticket_number: 1,
      document: prepareDocumentArray(),
      message: data.message,
    };

    // console.log(data);
    console.log(requestData);
    // createTicket(requestData)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    setIsSending(true);
    axios
      .post("https://plastapp.iran.liara.run/ticket/crate/", requestData, {
        headers: {
          Authorization: `Bearer ${st.accessToken}`,
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
          "X-CSRFToken":
            "QS5LMewsk4LCnxJDfgyaMRB4CZ2tQM3X0C8sfFfW5E5p1BXVggZOvlfqdl8jAnyK",
        },
      })
      .then(() => {
        setIsSending(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsSending(false);
      });
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

        {isSending ? (
          <Spinner />
        ) : (
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
                className={style.textField}
                name="title"
                type="text"
                label="عنوان"
                sx={{ width: "70%", textAlign: "right" }}
              />
              <Select
                className={style.selectField}
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
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};

export default NewTicketComponent;
