import React, { useEffect, useState } from "react";

import { BsStarFill } from "react-icons/bs";
import CardComment from "./cardComment";
import Profile from "../../../../../../../assets/imgs/shop_1.jpg";
import { FlexMainComments } from "./styledComments";
import {
  getProductComments,
  postProductComments,
} from "../../../../../../../api/api";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Storage from "../../../../../../../service/Storage";

const CommentsProduct = ({ list }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const st = Storage();
  const total = 5;
  const avrage = 4.4;
  const { id } = useParams();
  console.log("object", st);
  console.log("pathname", pathname, "id", id);
  const [comments, setComments] = useState([]);
  const [loadComments, setLoadComments] = useState(0);

  useEffect(() => {
    getProductComments(id).then((res) => {
      setComments(res);
    });
  }, [loadComments]);

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

  return (
    <FlexMainComments>
      <div className="header-sugg">
        <h4>تجربه های خریداران</h4>
      </div>

      <div className="comments-list">
        <div className="list-comments">
          {comments.map((item) => (
            <CardComment key={item.id} item={item} />
          ))}
        </div>
        {pathname == `/products/${id}` ? (
          <form
            className="add_comment_box"
            enctype="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <label>- دیدگاه خود را بنویسید</label>
            <textarea name="content"></textarea>
            {st.accessToken != false ? (
              <button type="submit">ثبت دیدگاه</button>
            ) : (
              <button onClick={() => navigate("/login")}>ورود</button>
            )}
          </form>
        ) : (
          ""
        )}
      </div>
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
    </FlexMainComments>
  );
};

export default CommentsProduct;
