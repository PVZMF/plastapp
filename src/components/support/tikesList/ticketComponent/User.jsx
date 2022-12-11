import React from "react";
import Profile from "../../../../assets/imgs/detective.png";
import style from "./ticketComponent.module.css";

const User = ({ item }) => {
  return (
    <div className={style.user}>
      {/* <div className={style.image}>
        <img src={item.profile ? item.profile : Profile} alt="admin" />
      </div> */}
      <div className={style.textbox}>
        {/* <h4 className={style.title}>کاربر | {item.name}</h4> */}
        <div className={style.boxmessage}>
          <p>{item.message}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
