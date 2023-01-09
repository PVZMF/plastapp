import React, { useState } from "react";
import { TiMessages } from "react-icons/ti";
import { BsStarFill } from "react-icons/bs";
import { BiLike } from "react-icons/bi";

import Profile from "../../../../../../../assets/imgs/shop_1.jpg";

import { FlexMainCardComments } from "./styledCardComment";
import { toPersionDate } from "../../../../../../../functions/convertIranTime";
import { toPersianNumber } from "../../../../../../../functions/numbers";
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
  function incompletePhoneNumber(char, index, replacement) {
    return (
      char.substring(0, index) +
      replacement +
      char.substring(index + replacement.length)
    );
  }
  return (
    <FlexMainCardComments>
      <div className="card-comment">
        <div className="header-commnet">
          <div className="profile-comment">
            <img src={item?.user.thumbnail || Profile} />
            <div className="name-user">
              <h5 style={{ direction: "ltr" }}>
                {item?.user.name ||
                  toPersianNumber(
                    incompletePhoneNumber(item.user.phone_number, 4, "****")
                  )}
              </h5>
              <div className="stars-user">
                {[...Array(flagCounter())].map((item, index) => {
                  <BsStarFill key={index} />;
                })}
              </div>
            </div>
          </div>
          <span>{item ? toPersionDate(item.posted) : ""}</span>
        </div>

        <p className="comment">{item?.content}</p>

        <div className="btns-comment">
          {/* <button>
            <BiLike /> مفید بود
          </button>
          <button>
            <TiMessages /> مشورت
          </button> */}
        </div>
      </div>
    </FlexMainCardComments>
  );
};

export default CardComment;
