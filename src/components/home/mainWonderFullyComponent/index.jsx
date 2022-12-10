import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import BoxOff from "../../../assets/imgs/basket.png";
import TextOff from "../../../assets/imgs/wonder.png";
import pro1 from "../../../assets/imgs/pro1.jpg";
import pro2 from "../../../assets/imgs/pro2.jpg";
import style from "./wonderFullyComponent.module.css";
import { Link } from "react-router-dom";
import { partialData } from "../../../api/api";
import { baseUrl } from "../../../api/axios";

const WonderFullyComponent = ({ products }) => {
  function findMax(array) {
    var max = 0,
      a = array.length,
      counter;
    for (counter = 0; counter < a; counter++) {
      if (array[counter].percent > max) {
        max = array[counter].percent;
      }
    }
    return max;
  }
  const MaxPresent = findMax(products);

  const [data, setData] = useState([]);

  useEffect(() => {
    partialData()
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .finally(() => {});
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

          <h4>تا {MaxPresent.toLocaleString("fa-IR")} % تخفیف</h4>
        </div>
        <div className={style.productsList}>
          {products.map((item, index) => {
            if (index <= 4) {
              return (
                <Link key={index + "wonderfully"} to={`products/${item.id}`}>
                  <div className={style.product_box}>
                    <img src={item.img} alt={item.img} />
                    <p>{item.percent.toLocaleString("fa-IR")}%</p>
                  </div>
                </Link>
              );
            }
          })}
        </div>

        <Link to="/products">
          <button className={style.more}>
            بیش از {products.length.toLocaleString("fa-IR")} کالا{" "}
            <BsArrowLeft />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WonderFullyComponent;

WonderFullyComponent.defaultProps = {
  off: 51,
  products: [
    {
      id: 1,
      img: pro1,
      name: "testname",
      percent: 30,
    },
    {
      id: 2,
      img: pro2,
      name: "testname",
      percent: 50,
    },
    {
      id: 3,
      img: pro1,
      name: "testname",
      percent: 20,
    },
    {
      id: 4,
      img: pro2,
      name: "testname",
      percent: 10,
    },
    {
      id: 5,
      img: pro2,
      name: "testname",
      percent: 15,
    },
    {
      id: 6,
      img: pro1,
      name: "testname",
      percent: 57,
    },
    {
      id: 7,
      img: pro2,
      name: "testname",
      percent: 40,
    },
  ],
};
