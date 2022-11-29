import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardBlog from "./cardBlog";
import imgBlog from "../../assets/imgs/shop_1.jpg";
import style from "./blog.module.css";
import axios from "axios";
import Spinner from "../Spinner/Spinner";
const Blog = () => {
  const [blogList, setBlogList] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://plastapp.iran.liara.run/blog/list/")
      .then((res) => {
        console.log(res);
        setBlogList(res.data);
        setLoading(false);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (loading) {
    return <Spinner />;
  }

  const [blogListuseState, setBlogListuseState] = useState([]);
  useEffect(() => {
    // setLoading(true);
    getBlogList()
      .then((results) => {
        setBlogListuseState(results);
      })
      .finally(() => {
        console.log(blogListuseState);
      });
  }, []);

  return (
    <div className={style.blog}>
      <div className={style.title}>
        <h3>وبلاگ</h3>
      </div>

      <div className={style.listBlog}>
        {blogList.map((item) => (
          <div className={style.card} key={item.id}>
            <Link to={`/blog/${item.id}`}>
              <CardBlog item={item} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
