import React from "react";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";

const Ticket = ({ data }) => {
 
  return (
    <div className="ticket">
      <div>
        {data.status === "unread" ? (
          <span className="status1">
            <SettingsRoundedIcon />
          </span>
        ) : (
          <span className="status2">
            <MailOutlineRoundedIcon />
          </span>
        )}
        <h4>{data.title}</h4>
      </div>
      <div>
        <h4>{data.ticket_number}</h4>
      </div>
      <div>
        <h4>{data.id}</h4>
      </div>
      <div>
        <h4>{data.status}</h4>
      </div>
      <div>
        <h4>
          {data.status === "unread" && "درحال بررسی"}
          {data.status === "closed" && "بسته شده"}
        </h4>
      </div>
    </div>
  );
};

export default Ticket;

Ticket.defaultProps = {
  title: "درخواست فاکتور رسمی",
  number: "۲۴",
  date: "1400/05/12",
  update: "1401/12/12",
  status: 1,
};
