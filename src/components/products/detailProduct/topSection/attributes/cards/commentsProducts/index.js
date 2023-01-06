import React, { useEffect, useState } from "react";

import { BsStarFill } from "react-icons/bs";
import CardComment from "./cardComment";
import Profile from "../../../../../../../assets/imgs/shop_1.jpg";

import { FlexMainComments } from "./styledComments";
import {
  getProductComments,
  postProductComments,
} from "../../../../../../../api/api";
import { useParams } from "react-router-dom";

const CommentsProduct = ({ list }) => {
  const total = 5;
  const avrage = 4.4;
  const { id } = useParams();

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
       
        setLoadComments((prev) => prev + 1);
      })
      .catch((error) => {
       
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

        <form
          className="add_comment_box"
          enctype="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <label>- دیدگاه خود را بنویسید</label>
          <textarea name="content"></textarea>
          <button type="submit">ثبت دیدگاه</button>
        </form>
      </div>
    </FlexMainComments>
  );
};

export default CommentsProduct;

