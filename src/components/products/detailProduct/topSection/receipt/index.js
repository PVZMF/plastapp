import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { BsPlusLg, BsCartCheck } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import Profile from "../../../../../assets/imgs/shop_1.jpg";
import Product from "../../../../../assets/imgs/pesteh.jpg";
import Product2 from "../../../../../assets/imgs/shalwar.jpg";
import { FlexMainReceipt } from "./styleReceipt";
import { addItem } from "../../../../../toolkit/slices/cart.slice";

import { getProductDetail } from "../../../../../api/api";
import { toPersianNumber } from "../../../../../functions/numbers";
import { fontSize } from "@mui/system";

const Receipt = ({ ProductsList }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cartState);
  const [item, setItem] = useState();
  const Percent = (item?.offer * 100) / item?.price;
  const total = item?.price - item?.offer;
  // const Items = () => {
  //   ProductsList.map((item) => {
  //     if (item.id !== id) {
  //       setItem(item);
  //     }
  //   });
  // };

  useEffect(() => {
    getProductDetail(id).then((res) => setItem(res));
  }, []);

  return (
    <FlexMainReceipt>
      <div className="top-receipt">
        <h5 className="title">فروشگاه</h5>

        <div className="profile">
          <img src={item?.shop.logo} alt={item?.shop.name} />
          <div className="box-profle">
            <h4>{item?.shop.name}</h4>
            <h5>{item?.category.title}</h5>
          </div>
        </div>

        <div className="btns-receipt">
          <button className="dialogue">
            <p style={{ color: "red", fontSize: "13px" }}>هزینه ارسال:</p>
            {item && item.delivery_cost != 0
              ? toPersianNumber(item.delivery_cost)
              : "رایگان"}
          </button>
          <button className="more-data">اطلاعات بیشتر</button>
        </div>
      </div>

      <div className="down-receipt">
        <div className="send-items">
          <div className="send-box">
            <h5>ارسال به</h5>
            <h4>{item?.send_to_all_point ? `سراسر کشور` : ``}</h4>
          </div>
          <div className="send-box">
            <h5>ارسال از فروشگاه</h5>
            <h4>
              <span>{item?.delivery_time.toLocaleString("fa-IR")}</span>
              <span> روز دیگر </span>
            </h4>
          </div>
          <div className="send-box">
            <h5>فروش محصول</h5>
            <h4>{item?.inventory.toLocaleString("fa-IR")}</h4>
          </div>
        </div>

        <div className="price-box">
          {item?.offer > 0 && (
            <div className="offer">
              <span>{Math.round(Percent).toLocaleString("fa-IR")}%</span>
              <del>{item?.price.toLocaleString("fa-IR")}</del>
            </div>
          )}
          <h5>
            {item?.offer
              ? total.toLocaleString("fa-IR")
              : item?.price.toLocaleString("fa-IR")}{" "}
            <span>تومان</span>
          </h5>
        </div>

        {state.selectedItems.find((pro) => pro.id == id) ? (
          <button className="added">
            <BsCartCheck /> قبلا انتخاب شده
          </button>
        ) : (
          <button className="buy" onClick={() => dispatch(addItem(item))}>
            <BsPlusLg /> افزودن به سبد خرید
          </button>
        )}
      </div>
    </FlexMainReceipt>
  );
};

export default Receipt;
