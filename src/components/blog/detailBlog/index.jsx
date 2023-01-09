import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ImgBlog from "../../../assets/imgs/shop_1.jpg";
import style from "./detailBlog.module.css";
import Comment from "./comment";
import axios from "axios";
import Spinner from "../../Spinner/Spinner";
import { getBlogDetails } from "../../../api/api";
import {
  createShop,
  getProductComments,
  postProductComments,
} from "../../../api/api";
import CommentsProduct from "../../products/detailProduct/topSection/attributes/cards/commentsProducts";
import { toast, ToastContainer } from "react-toastify";
import Storage from "../../../service/Storage";
const DetailBlog = () => {
  const st = Storage();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [loadComments, setLoadComments] = useState(0);
  const navigate = useNavigate();
  const [data, setData] = useState("");
  useEffect(() => {
    getBlogDetails(id).then((res) => {
      setData(res);
      setLoading(false);
    });
    getProductComments(id)
      .then((res) => {
        setComments(res);
      })
      .catch(() => {});
  }, []);
  function handleSubmit(e) {
    e.preventDefault();
    const dataform = new FormData(e.target);
    const data = Object.fromEntries(dataform.entries());
    postProductComments(id, data)
      .then((res) => {
        toast.success("دیدگاه با موفقیت ثبت و پس از تایید منتشر میگردد");
        setLoadComments((prev) => prev + 1);
      })
      .catch((error) => {
        toast.error("دیدگاه ثبت نشد");
        // navigate(`/login`);
      });
  }

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

          {comments.map(
            (item, index) => (
              <CommentsProduct key={item.id} item={item} />
            )
            // console.log(`index ${index}`, item)
          )}
          <form onSubmit={handleSubmit}>
            <div className={style.registerComment}>
              <textarea name="content"></textarea>
              {st.accessToken ? (
                <button type="submit">ثبت نظر</button>
              ) : (
                <button onClick={() => navigate("/login")}>ورود</button>
              )}
            </div>
          </form>
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default DetailBlog;
