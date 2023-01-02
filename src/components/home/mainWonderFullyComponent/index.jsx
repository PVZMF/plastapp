import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import BoxOff from "../../../assets/imgs/basket.png";
import TextOff from "../../../assets/imgs/wonder.png";
import pro1 from "../../../assets/imgs/pro1.jpg";
import pro2 from "../../../assets/imgs/pro2.jpg";
import style from "./wonderFullyComponent.module.css";
import { Link } from "react-router-dom";
import { getAmazingList, partialData } from "../../../api/api";
import { baseUrl } from "../../../api/axios";
import { toPersianNumber } from "../../../functions/numbers";
const WonderFullyComponent = ({ products }) => {
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const maxOffer = Math.max(...list.map((o) => o.price_with_offer));
  const maxOfferPrice = Math.max(...list.map((o) => o.price));

  const offer = (off, price) => {
    return (off / price) * 100;
  };
  useEffect(() => {
    partialData()
      .then((res) => {
       
        setData(res.data);
      })
      .finally(() => {});
    getAmazingList().then((res) => {
      setList(res);
    });
  }, []);
  return (
    <div className={style.wonderfully}>
      <div className={style.wonderfully_box}>
        <div className={style.title}>
          <img
            src={baseUrl + data.mid_banner_image}
            alt={data.mid_banner_text}
            className={style.boxOff}
          />
          <div alt="شگفتانه پلاست اپ" className={style.textOff}>
            {data.mid_banner_text}
          </div>

          <h4>
            تا %
            {offer(maxOfferPrice - maxOffer, maxOfferPrice).toLocaleString(
              "fa-IR"
            )}{" "}
            تخفیف
          </h4>
        </div>
        <div className={style.productsList}>
          {list
            .sort(function (a, b) {
              return b.price_with_offer - a.price_with_offer;
            })
            .map((item, index) => {
              if (index <= 4) {
                return (
                  <Link key={index + "wonderfully"} to={`products/${item.id}`}>
                    <div className={style.product_box}>
                      <img src={item.thumbnails} alt={item.thumbnails} />
                      {item.price_with_offer != null ? (
                        <p>
                          {toPersianNumber(
                            offer(
                              item.price - item.price_with_offer,
                              item.price
                            )
                          )}
                          %
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                  </Link>
                );
              }
            })}
        </div>

        <Link to="/category/all/products">
          <button className={style.more}>
            بیش از {list.length.toLocaleString("fa-IR")} کالا <BsArrowLeft />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WonderFullyComponent;
