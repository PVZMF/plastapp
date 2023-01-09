import React from "react";
import { TbTrash } from "react-icons/tb";

// Redux
import { useDispatch } from "react-redux";
import {
  decrease,
  increase,
  removeItem,
} from "../../../../../toolkit/slices/cart.slice";

// Style
import { CardContainer } from "./styledCard";

const Card = ({ data }) => {
  const dispatch = useDispatch();
  const { thumbnails, title, price, quantity, shop, price_with_offer } = data;

  const handleClick = () => {
    dispatch(removeItem(data));
  };
  return (
    <CardContainer>
      <div className="top-header">
        <h3>از غرفه {shop.name}</h3>
        <h2>یک کالا</h2>
      </div>

      <div className="data-product">
        <div className="right">
          <img src={thumbnails} alt={title} />
          <div className="box-data">
            <h2>{title}</h2>
            <div className="counter_box">
              <div className="number">
                <span onClick={() => dispatch(increase(data))}>+</span>
                <h5>{quantity.toLocaleString("fa-IR")}</h5>
                <span
                  onClick={() => {
                    quantity > 1 && dispatch(decrease(data));
                  }}
                >
                  -
                </span>
              </div>
              <button onClick={() => handleClick()}>
                <TbTrash />
              </button>
            </div>
          </div>
        </div>

        <div className="left">
          {price_with_offer ? (
            <del>
              {data.price.toLocaleString("fa-IR")} <span>تومان</span>
            </del>
          ) : null}
          <div className="price">
            {price_with_offer ? (
              <h5>
                {price_with_offer.toLocaleString("fa-IR")} <span>تومان</span>
              </h5>
            ) : null}
          </div>
        </div>
      </div>
    </CardContainer>
  );
};

export default Card;
