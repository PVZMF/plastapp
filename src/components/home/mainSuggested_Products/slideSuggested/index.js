import React from "react";
// import { BsStarFill } from 'react-icons/bs';
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import product from "../../../../assets/imgs/pesteh.jpg";
import { FlexMainSlidSuggested } from "./styledMainSlideSuggested";
import { Link } from "react-router-dom";
import { toPersianNumber } from "../../../../functions/numbers";

const SlideSuggested = ({
  id,
  price,
  creditSale,
  inventory,
  shopName,
  priceWithOffer,
  image,
  title,
}) => {
  // const off = price * (priceWithOffer / 100);
  //
  return (
    <FlexMainSlidSuggested>
      <img
        src={image}
        alt={title}
        style={{ borderRadius: "1.5rem", objectFit: "contain" }}
      />

      <div className="stars"></div>

      <h2>
        <Link to={`/products/${id}`}>{title}</Link>
      </h2>

      {inventory > 0 ? (
        <p className="true">موجود در انبار {shopName}</p>
      ) : (
        <p className="noting">ناموجود</p>
      )}

      {creditSale ? <p className="noting">امکان خرید اعتباری</p> : null}

      <div className="price-box">
        {priceWithOffer != null ? (
          <del>
            {price.toLocaleString("fa-IR")} <span>تومان - </span>
          </del>
        ) : null}
        <h5>
          {priceWithOffer > 0
            ? toPersianNumber(priceWithOffer)
            : toPersianNumber(price)}
          <span> تومان </span>
        </h5>
      </div>
    </FlexMainSlidSuggested>
  );
};

export default SlideSuggested;
