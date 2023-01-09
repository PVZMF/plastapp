import React from "react";
import imgBlog from "../../../assets/imgs/shop_1.jpg";
import style from "../blog.module.css";

const CardBlog = (props) => {
  const { thumbnail, id, title } = props.item;
  return (
    <div className={style.cardBlog}>
      <div className={style.imgbox}>
        <img src={thumbnail} alt={"img"} />
      </div>

      <div className={style.data}>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default CardBlog;
