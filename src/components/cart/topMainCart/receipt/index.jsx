import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdVerified } from "react-icons/md";
import { FlexMainReceipt } from "./styleReceipt";
import { stepPlus } from "../../../../toolkit/cart/cartAction";

const Receipt = ({ step, setStep }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cartState);

  const handleNextStep = () => {
    if (state.selectedItems.length > 0) {
      dispatch(stepPlus());
    }
  };
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
              {state.offers.toLocaleString("fa-IR")} <span>تومان</span>
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
          {(state.total - state.offers).toLocaleString("fa-IR")}{" "}
          <span>تومان</span>
        </h5>
      </div>

      <button onClick={handleNextStep}>
        {state.step === 0
          ? `ادامه خرید از${state.shops.toLocaleString("fa-IR")} غرفه`
          : "ادامه پرداخت"}
        {state.step === 1 && "ادامه و تایید روش ارسال"}
        {state.step === 2 && "پرداخت"}
      </button>

      <p>
        <span>
          <MdVerified />
        </span>{" "}
        تضمین رضایت: بازگشت سفارش و پول شما تا 7 روز
      </p>
    </FlexMainReceipt>
  );
};

export default Receipt;
