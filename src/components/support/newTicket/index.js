import React, { useState } from "react";
import style from "./style.module.css";
import { MenuItem, Select, TextField } from "@mui/material";
import { createTicket } from "../../../api/api";
import Spinner from "../../Spinner/Spinner";
import getBase64 from "../../../functions/base64";
import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";
import { useNavigate } from "react-router-dom";

const NewTicketComponent = () => {
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");
  const [base64, setBase64] = useState();
  const navigate = useNavigate();

  //base64
  const handleFileInputChange = (e) => {
    let file = e.target.files[0];
    getBase64(file)
      .then((result) => {
        console.log("result");
        console.log(result);
        base64
          ? setBase64([...base64, { file: result }])
          : setBase64([{ file: result }]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //submit
  const hanldeSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.document = base64;
    console.log(data);
    createTicket(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        if (err.data.code === "bad_authorization_header") navigate("/login");
      });
  };

  return (
    <div className={style.newticket}>
      <div className={style.box_ticket}>
        <div className={style.header_tikes}>
          <h4>ثبت درخواست جدید</h4>
        </div>

        {isSending ? (
          <Spinner />
        ) : (
          <form onSubmit={hanldeSubmit} encType="multipart/form-data">
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

            <div className={style.lowerContainer}>
              <div className={style.footer}>
                <div className={style.import}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "2rem",
                    }}
                  >
                    <label>بارگزاری فایل</label>
                    <AttachFileRoundedIcon />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileInputChange}
                    />
                  </div>

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
