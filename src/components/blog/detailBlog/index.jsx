import React from "react";
import { Link } from "react-router-dom";
import ImgBlog from "../../../assets/imgs/shop_1.jpg";
import style from "./detailBlog.module.css";
import Comment from "./comment";
import axios from "axios";

const DetailBlog = ({
  title,
  image,
  date,
  description,
  comments,
  listLikeBlog,
}) => {
    
  axios
    .get("")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  return (
    <div className={style.detailBlog}>
      <div className={style.boxBlog}>
        <div className={style.title}>
          <h3>- {title}</h3>
          <p>{date}</p>
        </div>

        <div className={style.boximg}>
          <img src={image} alt={title} />
        </div>

        <div className={style.description}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className={style.comments}>
          <h2 className={style.titleComments}>- نظرات کاربران</h2>

          {comments.map((item) => (
            <Comment key={item.id} item={item} />
          ))}

          <div className={style.registerComment}>
            <textarea></textarea>
            <button>ثبت نظر</button>
          </div>
        </div>
      </div>

      <div className={style.likeBlog}>
        <h5>مقالات پیشنهادی</h5>

        {listLikeBlog.map((item) => (
          <Link to={`/blog/${item.id}`} key={item.id}>
            <div className={style.like}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DetailBlog;

DetailBlog.defaultProps = {
  comments: [
    {
      id: 1,
      name: "علی لهراسبی",
      text: "خیلی جالب بود",
      date: "1400/08/21",
    },
    {
      id: 2,
      name: "مجید همتی",
      text: "خیلی مفید بود",
      date: "1400/08/21",
    },
  ],
  listLikeBlog: [
    {
      id: 1,
      title: "متن ساختگی 1",
      image: ImgBlog,
    },
    {
      id: 2,
      title: "متن ساختگی 2",
      image: ImgBlog,
    },
    {
      id: 3,
      title: "متن ساختگی 3",
      image: ImgBlog,
    },
    {
      id: 4,
      title: "متن ساختگی 4",
      image: ImgBlog,
    },
  ],
  title: "مقایسه کامل مک بوک ایر M1 و مک بوک ایر M2",
  image: ImgBlog,
  date: "1400/03/05",
  description:
    "بدون شک لپ‌تاپ‌های سری مک بوک با پردانده M1 جزو بهترین نوت‌بوک‌های دنیا بوده‌اند. اما در سال ۲۰۲۲ اپل از سری جدید لپ‌تاپ‌های خودش با پردازنده M2 رونمایی کرد. در این مطلب می‌خواهیم به طور مشخص به مقایسه مک بوک ایر M1 و مک بوک ایر M2 بپردازیم و ببینیم نسل جدید چقدر ارزش خرید دارد؟",
};
