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

  useEffect(() => {
    getProductComments(id).then((res) => {
      setComments(res);
    });
  }, []);

  useEffect(() => {
    postProductComments(id, { content: "test comments content" })
      .then((res) => {
        console.log("post request done >>>>>", res);
      })
      .catch((error) => {
        console.log("post request error >>>>>", error);
      });
  }, []);

  console.log("comments >>>>>>>", comments);

  return (
    <FlexMainComments>
      <div className="header-sugg">
        <h4>تجربه های خریداران</h4>
      </div>

      <div className="comments-list">
        <div className="title-comment">
          <div className="point">
            <h5>
              {avrage.toLocaleString("fa-IR")}{" "}
              <span>از {total.toLocaleString("fa-IR")}</span>
            </h5>

            <p>204 تجربه ثبت شده است.</p>

            <div className="stars">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
            </div>
          </div>

          <div className="chart">
            <div className="line-chart">
              <span>
                5 <BsStarFill />
              </span>
              <div className="line">
                <hr />
              </div>
              <span>135</span>
            </div>
            <div className="line-chart">
              <span>
                4 <BsStarFill />
              </span>
              <div className="line">
                <hr />
              </div>
              <span>105</span>
            </div>
            <div className="line-chart">
              <span>
                3 <BsStarFill />
              </span>
              <div className="line">
                <hr />
              </div>
              <span>80</span>
            </div>
            <div className="line-chart">
              <span>
                2 <BsStarFill />
              </span>
              <div className="line">
                <hr />
              </div>
              <span>45</span>
            </div>
            <div className="line-chart">
              <span>
                1 <BsStarFill />
              </span>
              <div className="line">
                <hr />
              </div>
              <span>15</span>
            </div>
          </div>
        </div>

        <div className="list-comments">
          {list.map((item) => (
            <CardComment key={item.id} item={item} />
          ))}
        </div>

        <div className="add_comment_box">
          <label>- دیدگاه خود را بنویسید</label>
          <textarea></textarea>
          <button>ثبت دیدگاه</button>
        </div>
      </div>
    </FlexMainComments>
  );
};

export default CommentsProduct;

CommentsProduct.defaultProps = {
  list: [
    {
      id: "1",
      name: "یاسر عسگری",
      comment: "زحمت کشیدید آقای سپهری عزیز خیلی ممنون",
      image: Profile,
      date: "18 آبان 1401",
    },
  ],
};
