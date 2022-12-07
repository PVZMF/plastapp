import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addCheque } from "../../api/api";
import { useSelect } from "@mui/base";
import { FiUpload } from "react-icons/fi";
import { ImUserTie } from "react-icons/im";
import Toasted from "../toasted/Toasted";
import ChequeImg from "../../assets/imgs/defaultImg.svg";
import chequeImage1 from "../../assets/imgs/cheque.svg";
import style from "./cheque.module.css";


const Cheque = () => {
  const [img, setImage] = useState(false);
  const [isAccept, setIsAccept] = useState("");
  const [nationalImage, setNationalImage] = useState("");
  const [chequeImage, setChequeImage] = useState("");
  const [toast, setToast] = useState({ success: false, error: false });

  const handleClick = (e) => {
    e.preventDefault();
    const form_data = new FormData(e.target);
    const data = Object.fromEntries(form_data.entries());
    const dataToNum = {
      ...data,
      amount: parseInt(data.amount),
    };
    console.log(dataToNum);
    setToast((state) => {
      return { ...state, success: true };
    });

    addCheque(dataToNum)
      .then((res) => {
        Toasted("عکس با موفقیت اپلود شد", true, "success");
        setImage(true);
        setChequeImage(res.cheque_image);
        setNationalImage(res.national_image);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log("isAccept = ", isAccept);
    console.log("nationalImage ", nationalImage);
    console.log("chequeImage ", chequeImage);
  }, [nationalImage, chequeImage, isAccept]);


  return (
    <form onSubmit={handleClick}>
      <div className={style.cheque}>
        <div className={style.boxCheque}>

          <div className={style.box_inputs_image}>
            <div className={style.boximage}>
              <div className={style.imgBox}>
                <img
                  src={img ? chequeImage : ChequeImg}
                  alt="chequeImage"
                  style={{
                    width: "100%",
                    height: "50%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <button className={style.uploadimg}>
                <input
                  type="file"
                  name="national_image"
                  onChange={(e) => setNationalImage(e.target.files[0])}
                />
                <span>ارسال تصویر چک</span> <FiUpload />
              </button>
            </div>

            <div className={style.boximage}>
              <div className={style.imgBox}>
                <img
                  src={img ? nationalImage : ChequeImg}
                  alt="nationalImage"
                  style={{
                    width: "100%",
                    height: "50%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <button className={style.uploadimg}>
                <input
                  type="file"
                  name="cheque_image"
                  onChange={(e) => setChequeImage(e.target.files[0])}
                />
                <span>ارسال تصویر کارت ملی</span> <FiUpload />
              </button>
            </div>
          </div>

          <div className={style.description}>
            <div style={{ width: "100%" }}>
              <label htmlFor="amount">مبلغ چک</label>
              <div
                style={{
                  border: "1px solid #888",
                  height: "30px",
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <input
                  type="number"
                  name="amount"
                  style={{ width: '100%',border: "none", outline: "none" }}
                />
                <span style={{margin: '0 .7rem'}}>ریال</span>
                {/* <img
                  src={chequeImage1}
                  style={{ width: "25px", height: "25px" }}
                /> */}
              </div>
            </div>
            <label
              style={{ width: "100%", textAlign: "right" }}
              htmlFor="description"
            >
              توضیحات
            </label>
            <textarea
              name="description"
              id=""
              cols="40"
              rows="4"
              style={{ width: "100%", marginBottom: "20px", resize: "none" }}
            ></textarea>
            <div style={{ marginBottom: "20px" }}>
              <span>کلیه </span>
              <Link>قوانین</Link>
              <span> مربوط به خرید اعتباری را می پذیرم</span>
              <input
                type="checkbox"
                value={isAccept}
                onChange={(e) => setIsAccept(e.target.checked)}
              />
            </div>
            <button>ارسال چک</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Cheque;
