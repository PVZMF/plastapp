import React from "react";
import imgBlog from "../../../assets/imgs/shop_1.jpg";
import style from "../blog.module.css";

<<<<<<< HEAD
const CardBlog = (props) => {
  const { thumbnail, id, title } = props.item;
  return (
    <div className={style.cardBlog}>
      <div className={style.imgbox}>
        <img src={thumbnail} alt={"img"} />
      </div>
=======
const CardBlog = ({ title, thumbnail, date }) => {
  return (
    <div className={style.cardBlog}>
        <div className={style.imgbox}>
            <img src={thumbnail} alt={title} />
        </div>
>>>>>>> b291e95 (change Blog)

      <div className={style.data}>
        <h3>{title}</h3>
        <p>{id}</p>
      </div>
    </div>
  );
};

export default CardBlog;
<<<<<<< HEAD
=======

CardBlog.defaultProps = {
    title: 'متن تستی',
    thumbnail: imgBlog,
    date: '8 روز پیش'
}
>>>>>>> b291e95 (change Blog)
