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
  const off = price * (priceWithOffer / 100);
  console.log("price", price);
  return (
    <FlexMainSlidSuggested>
      <img src={image} alt={title} style={{ borderRadius: "1.5rem" }} />

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
            {toPersianNumber(price)} <span>تومان - </span>
          </del>
        ) : null}
        <h5>
          {off > 0 ? off : toPersianNumber(price)}
          <span> تومان </span>
        </h5>
      </div>
    </FlexMainSlidSuggested>
  );
};

export default SlideSuggested;
