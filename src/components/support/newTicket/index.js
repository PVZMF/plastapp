import React, { useState } from "react";
import style from "./style.module.css";
import { MenuItem, Select, TextField } from "@mui/material";
import { createTicket } from "../../../api/api";
import Spinner from "../../Spinner/Spinner";
import getBase64 from "../../../functions/base64";
import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const NewTicketComponent = () => {
  const navigate = useNavigate();
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");
  const [base64, setBase64] = useState();
  const [img, setImg] = useState([]);
  //base64
  const handleFileInputChange = (e) => {
    let file = e.target.files[0];
    img ? setImg([...img, file]) : setImg(file);
    getBase64(file)
      .then((result) => {
       
       
        base64
          ? setBase64([...base64, { file: result }])
          : setBase64([{ file: result }]);
      })
      .catch((err) => {
       
      });
  };

  //submit
  const hanldeSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.document = base64;
   
    createTicket(data)
      .then((res) => {
        navigate("/support/ticketsList");
        if (res.status === "unread") {
          toast.success("تیکت با موفقیت ثبت شد");
        }
      })
      .catch((err) => {
       
        if (err.status == 400 || err.status == 401) {
          toast.error("تیکت ثبت نشد");
        }
        if (err.data.code === "bad_authorization_header") navigate("/login");
      });
  };
  const handleRemoveImg = (item, i) => {
    setImg(() => {
      return img.filter((imgP, index) => {
        return imgP !== item;
      });
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
                    <label>
                      بارگزاری فایل
                      <AttachFileRoundedIcon />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileInputChange}
                      />
                    </label>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        flexDirection: "row",
                        overflow: "hidden",
                      }}
                    >
                      {img.map((item, index) => (
                        <div
                          style={{
                            width: "fit-content",

                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            padding: " 0.3rem 1rem",
                            border: " 1px solid #888",
                            borderRadius: " 0.7rem",
                            margin: " 0.5rem 0",
                            maxWidth: "150px",
                          }}
                        >
                          <button
                            style={{
                              background: "transparent",
                              color: "rgb(210, 25, 25)",
                              fontSize: "clamp(2rem, 2.5vw, 2.5rem)",
                              margin: "0px",
                            }}
                            onClick={() => handleRemoveImg(item, index)}
                          >
                            -
                          </button>
                          {item.name}
                        </div>
                      ))}
                    </div>
                  </div>

                  <p>
                    حداکثر اندازه هر فایل 400 کیلوبایت و نهایتا سه فایل ارسال
                    فرمایید
                  </p>
                  <p
                    style={{
                      color: "red",
                      marginTop: "20px",
                      fontSize: "14px",
                    }}
                  >
                    ارسال فایل اجباری است{" "}
                  </p>
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default NewTicketComponent;
