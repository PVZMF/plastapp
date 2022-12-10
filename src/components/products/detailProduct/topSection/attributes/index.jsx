import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AboutProduct from "./cards/aboutProduct";
import CommentsProduct from "./cards/commentsProducts";
import ImageBox from "./cards/imageProduct/ImageBox";
import ProductProperty from "./cards/productProperty";
import SuggestionProduct from "./cards/suggestionProduct";

import { FlexMainBaskets } from "./styledBaskets";

import { getProductDetail } from "../../../../../api/api";

const Attributes = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState();

  useEffect(() => {
    getProductDetail(id).then((res) => setProductDetail(res));
  }, []);

  console.log("debug >>>", productDetail);

  return (
    <FlexMainBaskets>
      <div className="cart-list">
        <ImageBox detail={productDetail} />
        <ProductProperty detail={productDetail} />
        <AboutProduct detail={productDetail} />
        <SuggestionProduct />
        <CommentsProduct />
      </div>
    </FlexMainBaskets>
  );
};

export default Attributes;
