import React from "react";
import { Link } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../../toolkit/slices/cart.slice";

// Icons
import { BsPlusLg, BsCartCheck } from "react-icons/bs";
import { AiTwotoneShop } from "react-icons/ai";
import { FlexProductCard } from "./styledProductCard";
import { toPersianNumber } from "../../../functions/numbers";

const CardProduct = ({ item, categorys }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cartState);

  return (
    <FlexProductCard>
      <div className="image">
        <Link to={`/products/${item.id}`}>
          <img src={item.thumbnails} alt={item.title} />
        </Link>
      </div>

      <div className="product-data">
        <h3>
          <Link to={`/products/${item.id}`}>{item.title}</Link>
        </h3>
        <h4>
          {categorys
            .filter((element) => element.id == item.category)
            .map((el) => el.title)}
        </h4>
        <h4>
          <span>{`تعداد موجود :`}</span>
          <span>{` ${toPersianNumber(item.inventory)} `}</span>
        </h4>
        <h4>
          <span style={{ color: "red" }}>
            {item.credit_sale ? `خرید اعتباری` : ``}
          </span>
        </h4>
        <div className="location">
          <AiTwotoneShop />
          <p>{item.send_to_all_point ? "سراسر ایران" : ""}</p>
        </div>

        <div className="down-items">
          {state.selectedItems.find((pro) => pro.id === item.id) ? (
            <button className="added">
              <Link to={`/cart/`}>
                <BsCartCheck />
              </Link>
            </button>
          ) : (
            <button onClick={() => dispatch(addItem(item))}>
              <BsPlusLg />
            </button>
          )}
          <div className="price-box">
            {item.price_with_offer ? (
              <div className="offer">
                <span>
                  {item.price_with_offer.toLocaleString("fa-IR")} تومان
                </span>
                <del>{item.price.toLocaleString("fa-IR")}</del>
              </div>
            ) : (
              <span>{item.price.toLocaleString("fa-IR")}</span>
            )}
            <h5>
              {/* {totalprice.toLocaleString("fa-IR")} <span>تومان</span> */}
            </h5>
          </div>
        </div>
      </div>
    </FlexProductCard>
  );
};

export default CardProduct;
