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
  const [sorted, setSorted] = useState([]);
  const maxOffer = Math.max(...list.map((o) => o.price_with_offer));
  const maxOfferPrice = Math.max(...list.map((o) => o.price));
  console.log("maxOffer", maxOffer);
  let index = list.findIndex((item) => item.price_with_offer == maxOffer);

  console.log("maxOfferPrice", maxOfferPrice);
  console.log("index", index);
  const offer = (off, price) => {
    return ((off / price) * 100).toFixed(2);
  };
  const maxOfferPerPrice = () => {
    let max = 0;
    console.log(`List =`, list);
    sorted.map((item, index) => {
      let off = (item.price_with_offer / item.price) * 100;
      console.log(`index is ${index} = `, off);
      console.log(`index is ${index} = `, item.price_with_offer);
      if (off > max) {
        max = off;
      }
    });
    return max;
  };
  console.log("maxOfferPerPrice()", maxOfferPerPrice());
  useEffect(() => {
    partialData()
      .then((res) => {
        setData(res.data);
      })
      .finally(() => {});
    getAmazingList().then((res) => {
      setList(res);
    });
    let sorted = list.sort(function (a, b) {
      return b.price_with_offer - a.price_with_offer;
    });
    setSorted(sorted);
  }, []);
  console.log(`sorted =`, sorted);

  return (
    <div className={style.wonderfully}>
      <div className={style.wonderfully_box}>
        <div className={style.title}>
          <img
            src={baseUrl + data.mid_banner_image}
            alt={data.mid_banner_text}
            className={style.boxOff}
          />
          <div alt="?????????????? ?????????? ????" className={style.textOff}>
            {data.mid_banner_text}
          </div>

          <h4>???? %{maxOfferPerPrice()} ??????????</h4>
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
            ?????? ???? {list.length.toLocaleString("fa-IR")} ???????? <BsArrowLeft />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WonderFullyComponent;
