import React from "react";
import { FiUpload } from "react-icons/fi";
import { Link } from "react-router-dom";
import { addCheque } from "../../api/api";
import ChequeImg from "../../assets/imgs/defaultImg.svg";
import style from "./cheque.module.css";

const Cheque = ({ img }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const form_data = new FormData(e.target);
    const data = Object.fromEntries(form_data.entries());
    const dataToNum = {
      ...data,
      amount: parseInt(data.amount),
    };
    console.log(dataToNum);
    addCheque(dataToNum)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form onSubmit={handleClick}>
      <div className={style.cheque}>
        <div className={style.boxCheque}>
          <div className={style.boximage}>
            <div className={style.imgBox}>
              <img src={img ? img : ChequeImg} alt="cheque" />
            </div>
            <button className={style.uploadimg}>
              <input type="file" name="cheque_image" />
              <span>ارسال تصویر کارت ملی</span> <FiUpload />
            </button>
            <button className={style.uploadimg}>
              <input type="file" name="national_image" />
              <span>ارسال تصویر چک</span> <FiUpload />
            </button>
          </div>

          <div className={style.description}>
            <input type="number" name="amount" />
            <textarea name="description" id="" cols="40" rows="4"></textarea>
            <div className={style.rules}>
              <span>کلیه </span>
              <Link>قوانین</Link>
              <span> مربوط به خرید اعتباری را می پذیرم</span>
              <input type="checkbox" />
            </div>
            <button>ارسال چک</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Cheque;
