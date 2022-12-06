import React from "react";
// import { BsStarFill } from 'react-icons/bs';
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import product from "../../../../assets/imgs/pesteh.jpg";
import { FlexMainSlidSuggested } from "./styledMainSlideSuggested";
import { Link } from "react-router-dom";

const SlideSuggested = ({
  offer,
  image,
  title,
  price,
  number,
  point,
  id,
  credit_shoping,
}) => {
  const off = price * (offer / 100);
  return (
    <FlexMainSlidSuggested>
      {offer !== 0 && (
        <div className="offer-notif">
          <h5>{offer}% OFF</h5>
          <p>فقط تا آخر خرداد</p>
        </div>
      )}

      <img src={image} alt={title} />

      <div className="stars">
        {[...Array(5)].map((item, index) => (
          <StarRoundedIcon
            key={index}
            className={point > index ? "active" : "stargray"}
          />
        ))}
      </div>

      <h2>
        <Link to={`/products/${id}`}>{title}</Link>
      </h2>

      {number > 0 ? (
        <p className="true">موجود در انبار پلاست اپ</p>
      ) : (
        <p className="noting">ناموجود</p>
      )}

      {credit_shoping ? <p className="noting">امکان خرید اعتباری</p> : null}

      <div className="price-box">
        {offer !== 0 && (
          <del>
            {price} <span>تومان - </span>
          </del>
        )}
        <h5>
          {off > 0 ? off : price} <span>تومان</span>
        </h5>
      </div>
    </FlexMainSlidSuggested>
  );
};

export default SlideSuggested;

SlideSuggested.defaultProps = {
  id: 1,
  title: "دستکش یکبار مصرف",
  image: product,
  number: 10,
  price: 160000,
  offer: 20,
  point: 3,
  credit_shoping: true,
};
