import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Admin from "./Admin";
import style from "./ticketComponent.module.css";
import User from "./User";
import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";
import { createTicketMessage, ticketDetail } from "../../../../api/api";
import getBase64 from "../../../../functions/base64";
import { toPersianNumber } from "../../../../functions/numbers";

const TicketComponent = ({ list }) => {
  const [data, setData] = useState();
  const [ticketInfo, setTicketInfo] = useState();
  const [base64, setBase64] = useState();

  const { id } = useParams();

  useEffect(() => {
    ticketDetail(id).then((res) => setTicketInfo(res));
  }, []);

  //base64
  const handleFileInputChange = (e) => {
    let file = e.target.files[0];
    getBase64(file)
      .then((result) => {
        setBase64({ file: result });
      })
      .catch((err) => {});
  };

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.document = base64;

    createTicketMessage(data, id);
  }

  return (
    <div className={style.ticket}>
      <div className={style.box_ticket}>
        <div className={style.header}>
          <div className={style.message}>
            <h5>{ticketInfo?.title}</h5>
            <h4>
              تیکت {ticketInfo ? toPersianNumber(ticketInfo.ticket_number) : ""}
            </h4>
          </div>
          <div className={style.status}>
            <h5>
              {` وضعیت تیکت `}
              <span>
                {ticketInfo?.status == "unread"
                  ? " در حال بررسی"
                  : ticketInfo?.status == "pending"
                  ? " خوانده شده"
                  : " بسته شده"}
              </span>
            </h5>
            <h5>
              زمان ایجاد{" "}
              <span>
                {ticketInfo ? toPersianNumber(ticketInfo.created) : ""}
              </span>
            </h5>
          </div>
        </div>

        <div className={style.chats}>
          {ticketInfo?.message_list.map((item) =>
            item.sender === "customer" ? (
              <User key={item.id} item={item} />
            ) : (
              <Admin key={item.id} item={item} />
            )
          )}
        </div>

        <form
          className={style.box_input_message}
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <textarea placeholder="متن خود را بنویسید..." name="message" />

          <div className={style.footer}>
            <div className={style.import}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "2rem",
                  position: "relative",
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

              <p>
                حداکثر اندازه هر فایل 400 کیلوبایت و نهایتا سه فایل ارسال
                فرمایید
              </p>
              <p style={{ color: "red", marginTop: "20px", fontSize: "14px" }}>
                ارسال فایل اجباری است{" "}
              </p>
            </div>

            <button type="submit">ارسال</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TicketComponent;
