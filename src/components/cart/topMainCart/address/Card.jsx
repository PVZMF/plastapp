import React from "react";
import { IoWalletOutline } from "react-icons/io5";
import { BiTimeFive } from "react-icons/bi";
import style from "./address.module.css";
import { toPersianNumber } from "../../../../functions/numbers";

const Card = ({ index, all, item }) => {
  console.log("object", item);
  return (
    <div className={style.card_item}>
      <h5>
        مرسوله {toPersianNumber(index + 1)} از {toPersianNumber(all)}
      </h5>
      <div className={style.sendas}>
        <h5>
          <span>از غرفه</span>: {item?.shop.name}
        </h5>
        <h5>
          <span>ارسال از</span>: {item?.city}
        </h5>
      </div>

      <div className={style.imgBox}>
        <img src={item?.thumbnails} alt={item?.title} />
        <p>{item?.quantity}</p>
      </div>

      <h2>
        <IoWalletOutline /> هزینه‌ارسال:{" "}
        <p>
          {item?.sendPrice > 0
            ? item?.sendPrice.toLocaleString("fa-IR")
            : "رایگان"}
        </p>
      </h2>
      <h2>
        <BiTimeFive /> زمان تقریبی ارسال محصول: <p>3 روز کاری</p>
      </h2>
    </div>
  );
};

export default Card;
