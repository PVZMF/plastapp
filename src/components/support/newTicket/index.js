import React, { useState } from "react";
import style from "./style.module.css";
import { MenuItem, Select, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  setTitle,
  setUser,
  setStatus,
  setPriority,
  setDocument,
  clearAllTicketState,
} from "../../../toolkit/slices/ticketSlice";
import axios from "axios";
import UploadFile from "../../upload file";
import Storage from "../../../service/Storage";
const NewTicketComponent = () => {
  const st = Storage();

  console.log(st);

  const [file, setFile] = useState([]);
  const addInputTypeFile = () => {
    if (file.length < 2) {
      setFile((state) => {
        return [...state, state.length + 2];
      });
    }
  };
  console.log("st.accessToken", st.accessToken);
  const hanldeSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const { title, document, message, priority } = data;
    console.log("data", data);
    axios
      .post(
        "https://plastapp.iran.liara.run/ticket/crate/",

        {
          user: 0,
          title,
          document,
          message,
          priority,
          document: [document],
          status: "unread",
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${st.accessToken}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log({
          user: 9108462478,
          title,
          document,
          message,
          priority,
          document: [document],
          status: "unread",
        });
      });
  };
  const dispatch = useDispatch();
  const title = useSelector((state) => state.ticket.title);
  const user = useSelector((state) => state.ticket.user);
  const status = useSelector((state) => state.ticket.status);
  const priority = useSelector((state) => state.ticket.priority);
  const document = useSelector((state) => state.ticket.document);

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
              required
              label="ssss"
              sx={{ width: "70%" }}
            />
            <Select
              name="priority"
              sx={{ width: "20%" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="sadasdsa"
              value={priority}
              onChange={(event) => dispatch(setPriority(event.target.value))}
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
            style={{
              width: "40px",
              height: "40px",
              background: "red",
              fontSize: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={addInputTypeFile}
          >
            +
          </div>
          <div className={style.footer}>
            <div className={style.import}>
              <UploadFile index={-1} name="document" />
              {file
                ? file.map((items, index) => {
                    return <UploadFile key={`${index}`} index={index} />;
                  })
                : ""}
              <p>حجم فایل نباید بیشتر از 400 کیلوبایت باشد</p>
            </div>

            <button type="sumbit">ثبت</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTicketComponent;
