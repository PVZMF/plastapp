import { Typography } from "@mui/material";
import { useState } from "react";
import "./index.scss";

function ProductBanner({ productName = "", productbanners = [], creditSale }) {
  const [selectedBanner, setSelectedBanner] = useState(productbanners[0]);

  const renderedBanners = (items) =>
    items.map(
      (item) =>
        item && (
          <img
            key={item}
            src={item}
            onClick={() => setSelectedBanner(item)}
            alt=""
          />
        )
    );

  return (
    <div className="product-banner-container">
      <div className="product-banner-content">
        <h3 className="product-banner-title">{productName}</h3>
        {creditSale && (
          <Typography variant="body2" component="p" sx={{ color: "red" }}>
            {"امکان خرید اعتباری"}
          </Typography>
        )}
        <div className="product-banner-description"></div>
      </div>
      <div className="product-banner-banners">
        <div
          style={{ height: "310px", marginBottom: "5px", overflow: "hidden" }}
        >
          <img
            src={selectedBanner || ""}
            alt="product-banner"
            className="product-banner-banner"
          />
        </div>
        <div className="product-banner-banners-list">
          {renderedBanners(productbanners)}
        </div>
      </div>
    </div>
  );
}

export default ProductBanner;
