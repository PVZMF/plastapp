import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardProduct from "./cardProduct";
import { FlexDownCart } from "./styledDownCart";
import Product from "../../../assets/imgs/pesteh.jpg";
import Product2 from "../../../assets/imgs/shop_1.jpg";
import { getListProduct } from "../../../api/api";

const DownMainCart = () => {
  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getListProduct().then(res => {setLoading(false);setListProducts(res)}).catch(err => console.log(err));
  }, [])
  if (loading) {
     return <h1>Loading . . .</h1>;
  }
  return (
    <FlexDownCart>
      <div className="header-suggestion">
        <div className="right">
          <h4>شاید بپسندید !</h4>
          <h5>محصولات با ارسال رایگان</h5>
        </div>
        <Link to="/products">
          <button>همه محصولات</button>
        </Link>
      </div>
      <div className="list-suggestion">
        <div className="box-list">
          {[...listProducts]
            .reverse()
            .slice(0, 6)
            .map((item) => {
              return <CardProduct key={item.id + "plastapp"} item={item} />;
            })}
        </div>
      </div>
    </FlexDownCart>
  );
};

export default DownMainCart;
