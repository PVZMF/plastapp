import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ImgBlog from "../../../assets/imgs/shop_1.jpg";
import style from "./detailBlog.module.css";
import Comment from "./comment";
import axios from "axios";
import Spinner from "../../Spinner/Spinner";
const DetailBlog = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  //   console.log("params = = ", id);
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get(`https://plastapp.iran.liara.run/blog/detail/${id}/`)
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className={style.detailBlog}>
      <div className={style.boxBlog}>
        <div className={style.title}>
          <h3>- {data.title}</h3>
          <p>{data.title}</p>
        </div>

            <div className={style.boximg}>
              <img src={data.thumbnail} alt={data.title} />
            </div>

            <div className={style.description}>
              <h2>{data.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
            </div>

            <div className={style.comments}>
              <h2 className={style.titleComments}>- نظرات کاربران</h2>

              {/* {comments.map((item) => (
                <Comment key={item.id} item={item} />
              ))} */}

              <div className={style.registerComment}>
                <textarea></textarea>
                <button>ثبت نظر</button>
              </div>
            </div>
          </div>

      {/* <div className={style.likeBlog}>
        <h5>مقالات پیشنهادی</h5>

        {listLikeBlog.map((item) => (
          <Link to={`/blog/${item.id}`} key={item.id}>
            <div className={style.like}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          </Link>
        ))}
      </div> */}
    </div>
  );
};

export default DetailBlog;
