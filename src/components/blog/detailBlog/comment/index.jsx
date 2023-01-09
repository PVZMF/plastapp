import React from "react";
import style from "../detailBlog.module.css";

const Comment = ({ item }) => {
  return (
    <div className={style.comment}>
      <div className={style.header}>
        <h3>{item?.user.phone_name}</h3>
        <span>{item?.date}</span>
      </div>
      <p>{item?.content}</p>
    </div>
  );
};

export default Comment;
