import React from "react";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import {toPersianNumber} from "../../../functions/numbers"
import { flexCenter } from "./styledMainTikesList";
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
        <h4>{toPersianNumber( data.ticket_number)}</h4>
      </div>
      <div>
        <h4>{toPersianNumber(data.id)}</h4>
      </div>
      <div >
        <h4>{data.status=="unread"?"_":""}</h4>
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

