import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdVerified } from "react-icons/md";
import { FlexMainReceipt } from "./styleReceipt";
import {
  stepPlus,
  stepDefault,
  setIdCart,
  sendToCart,
  setModal,
} from "../../../../toolkit/slices/cart.slice";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  addItemToCart,
  createCart,
  deleteCart,
  gotToBank,
} from "../../../../api/api";
import { toPersianNumber } from "../../../../functions/numbers";

async function sendItem(items, idCart) {
  if (idCart) await deleteCart(idCart);
  const obj = await createCart();
  await items.map((item) => {
    addItemToCart(
      {
        product_id: item.id,
        quantity: item.quantity,
      },
      obj.id
    );
  });
  return obj.id;
}

const Receipt = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.cartState);
  const auth = useSelector((state) => state.auth);
  const [textButton, setTextButton] = useState(
    auth.isLogin ? "ثبت سفارش" : "ورود و ثبت سفارش"
  );
  const offers = state.offers ? state.offers : 0;

  const handleNextStep = () => {
    console.log("step", state.step);

    if (!auth.isLogin) {
      dispatch(stepDefault());
      navigate("../login");
    } else if (state.step > 3) {
      gotToBank().then((res) => console.log("mRes", res));
      dispatch(stepDefault());
    } else if (state.selectedItems.length > 0) {
      if (state.step === 0) {
        sendItem(state.selectedItems, state.idCart).then((res) =>
          dispatch(setIdCart(res))
        );
      }
    }
    if (!state.modal) {
      dispatch(stepPlus());
    } else setOpen(true);
  };

  // ListShop
  useEffect(() => {
    if (state.step === 0) {
      auth.isLogin
        ? setTextButton("ثبت سفارش")
        : setTextButton("ورود و ثبت سفارش");
    } else if (state.step === 1) {
      setTextButton("افزودن آدرس");
    } else if (state.step === 2) setTextButton("ادامه فرایند ثبت سفارش");
    else if (state.step === 3) setTextButton("پرداخت");
  }, [state.step]);
  console.log(state);
  return (
    <FlexMainReceipt>
      <h5 className="title-receipt">جزئیات قیمت</h5>
      <div className="top-receipt">
        <div className="products-price">
          <div className="price">
            <h4>قیمت محصولات:</h4>
            <h4>
              {state.total.toLocaleString("fa-IR")} <span>تومان</span>
            </h4>
          </div>
          <div className="off">
            <h4>{"(-)"}تخفیف محصولات:</h4>
            <h4>
              {offers.toLocaleString("fa-IR")} <span>تومان</span>
            </h4>
          </div>
        </div>
        <hr />
        <div className="send">
          <h5>
            هزینه ارسال {`(از ${state.shops.toLocaleString("fa-IR")} غرفه)`}
          </h5>
          <h5>وابسته به آدرس</h5>
        </div>

        <hr />
      </div>

      <div className="total-amount">
        <h5>مبلغ قابل پرداخت</h5>
        <h5>
          {(state.total - offers).toLocaleString("fa-IR")} <span>تومان</span>
        </h5>
      </div>

      <Button onClick={handleNextStep}>{textButton}</Button>

      <p>
        <span>
          <MdVerified />
        </span>{" "}
        تضمین رضایت: بازگشت سفارش و پول شما تا {toPersianNumber(7)} روز
      </p>
    </FlexMainReceipt>
  );
};

export default Receipt;
