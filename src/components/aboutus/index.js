import React from "react";
import { BsTelegram, BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";

import { baseUrl } from "../../api/axios";

import Map from "../../assets/imgs/shop_2.jpg";
// Style
import style from "./aboutus.module.css";

const AboutUs = ({ imageUrl, description }) => {
  return (
    <div className={style.aboutus}>
      <div className={style.box_data}>
        <div className={style.map}>
          <img src={`${baseUrl}${imageUrl}`} alt="plastapp" />
        </div>

        <div className={style.data}>{`${description}`}</div>
      </div>
    </div>
  );
};

export default AboutUs;

AboutUs.defaultProps = {
  description:
    "پلاست اپ اولین پلتفرم فروش انواع نایلکس،نایلکس و محصولات و خدمات پلاستیکی در ایران از سال 1397 فعالیت خود را به صورت رسمی آغاز نمود.",
  imageUrl: Map,
};
