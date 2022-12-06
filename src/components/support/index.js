import React, { useEffect, useState } from "react";
import { BsTelegram, BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";
import { getContactUs } from "../../api/api";
import { baseUrl } from "../../api/axios";

import Map from "../../assets/imgs/location-map.svg";
// Style
import style from "./support.module.css";

const Support = ({ numbers, email }) => {
  const [contact, setContact] = useState();

  useEffect(() => {
    getContactUs().then((result) => {
      setContact(result.data);
    });
  }, []);

  return (
    <div className={style.support}>
      <div className={style.box_data}>
        <div className={style.map}>
          <img src={Map} alt="map" />
        </div>

        <div className={style.data}>
          <div className={style.hours_work}>
            <h2>ساعت کار بخش اداری</h2>
            <div
              dangerouslySetInnerHTML={{ __html: contact?.explanation }}
            ></div>
          </div>
          <div className={style.contactus}>
            <h2>شماره های تماس</h2>
            <h3>{contact?.phone}</h3>
            <h3>{contact?.phone2}</h3>
            <h3>{contact?.phone3}</h3>
            <h3>ایمیل: {contact?.email}</h3>
            <div dangerouslySetInnerHTML={{ __html: contact?.address }}></div>
          </div>
          <div className={style.social_media}>
            <p>ما را در شبکه های اجتماعی دنبال کنید</p>
            <div className={style.social}>
              <button href="">
                <BsTwitter />
              </button>
              <button href="">
                <BsTelegram />
              </button>
              <button href="">
                <BsInstagram />
              </button>
              <button href="">
                <BsFacebook />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;

Support.defaultProps = {
  numbers: [
    {
      id: "1",
      phone_number: "۰۲۱-۹۱۰۳۰۸۰۹",
    },
    {
      id: "2",
      phone_number: "۰۲۱-۴۴۱۰۱۷۱۱",
    },
    {
      id: "3",
      phone_number: "۰۲۱-۴۴۱۰۱۷۸۸",
    },
  ],
  email: "info@plastapp.ir",
};
