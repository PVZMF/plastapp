import React from 'react';
import { FiUpload } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import ChequeImg from '../../assets/imgs/defaultImg.svg';
import style from './cheque.module.css';

const Cheque = ({ img }) => {
  return (
    <div className={style.cheque}>
        <div className={style.boxCheque}>
            <div className={style.boximage}>
                <div className={style.imgBox}>
                    <img src={img ? img : ChequeImg} alt="cheque" />
                </div>
                <button className={style.uploadimg}>
                    <input type="file" />
                    <span>ارسال تصویر</span> <FiUpload />
                </button>
            </div>

            <div className={style.description}>
                <div className={style.rules}>
                    <span>کلیه </span><Link>قوانین</Link><span> مربوط به خرید اعتباری را می پذیرم</span> 
                    <input type="checkbox" />
                </div>
                <button>ارسال چک</button>
            </div>
        </div>
    </div>
  )
}

export default Cheque