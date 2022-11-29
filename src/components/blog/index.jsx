import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardBlog from "./cardBlog";
import imgBlog from "../../assets/imgs/shop_1.jpg";
import style from "./blog.module.css";
import axios from "axios";
import Spinner from "../Spinner/Spinner";
import { getBlogList } from "../../api/api";
const Blog = () => {
  const [blogList, setBlogList] = useState("");
  const [loading, setLoading] = useState(true);

  const [blogListuseState, setBlogListuseState] = useState([]);
  useEffect(() => {
    // setLoading(true);
    getBlogList()
      .then((results) => {
        setLoading(false);
        setBlogListuseState(results);
      })
      .finally(() => {
        console.log(blogListuseState);
      });
  }, []);
  if (loading) {
    return <Spinner />;
  }

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
