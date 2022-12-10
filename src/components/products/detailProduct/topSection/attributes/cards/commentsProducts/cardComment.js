import React, { useState } from "react";

import { TiMessages } from "react-icons/ti";
import { BsStarFill } from "react-icons/bs";
import { BiLike } from "react-icons/bi";

import Profile from "../../../../../../../assets/imgs/shop_1.jpg";

import { FlexMainCardComments } from "./styledCardComment";

const CardComment = ({ item }) => {
  const [flagCount, setFlagCount] = useState();

  function likeBtnHandler() {}

  function flagCounter() {
    const flagCount = item?.flags.count;
    let result = 0;

    if (flagCount <= 5) {
      result = 1;
    } else if (flagCount <= 10) {
      result = 2;
    } else if (flagCount <= 15) {
      result = 3;
    } else if (flagCount <= 20) {
      result = 4;
    } else {
      result = 5;
    }
    return result;
  }

  return (
    <FlexMainCardComments>
      <div className="card-comment">
        <div className="header-commnet">
          <div className="profile-comment">
            <img src={item?.user.thumbnail || Profile} />
            <div className="name-user">
              <h5>{item?.user.name || "profile name"}</h5>
              <div className="stars-user">
                {/* <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill /> */}
                {[...Array(flagCounter())].map((item, index) => {
                  <BsStarFill key={index} />;
                })}
              </div>
            </div>
          </div>
          <span>{item?.posted}</span>
        </div>

        <p className="comment">{item?.content}</p>

        <div className="btns-comment">
          <button>
            <BiLike /> مفید بود
          </button>
          <button>
            <TiMessages /> مشورت
          </button>
        </div>
      </div>
    </FlexMainCardComments>
  );
};

export default CardComment;
