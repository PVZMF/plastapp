import { Typography } from "@mui/material";
import { base_api_url } from "api";
import axios from "axios";
import { toPersianNumber } from "functions/numbers";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct } from "store/actions";
import AboutProduct from "./about-product";
import BuyProduct from "./buy-product";
import Comments from "./comments";
import "./index.css";
import OtherStoreProducts from "./other-store-products";
import ProductBanner from "./product-banners";
import ProductFeatures from "./product-features";
import ProductShopping from "./product-shopping";

const ProductComponent = ({ products, fetchProduct }) => {
  const { id } = useParams();
  // const [refreshPage, setRefreshPage] = useState(true);
  const [commentIsOpen, setCommentIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${base_api_url}/Catagory/`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCategories(
          data?.category?.filter(
            (category) => category.parrent_category !== null
          )
        );
      });

    if (id && !products[id]) {
      fetchProduct(id);
      // setRefreshPage(false);
      // } else if (id && products[id] && refreshPage === true) {
    } else if (id && products[id]) {
      fetchProduct(id);
      // setRefreshPage(false);
    }
    // }, [id, refreshPage]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const imageList = [
    products[id]?.image1,
    products[id]?.image2,
    products[id]?.image3,
    products[id]?.image4,
    products[id]?.image5,
  ];

  return categories.length > 0 && products[id] ? (
    <div style={{ minHeight: "80vh", backgroundColor: "#f5f5f5" }}>
      <div className="product-container">
        <div>
          <ProductShopping
            ownerName={products[id].buissness_owner_name}
            ownerProfileUrl={products[id].buissness_owner_pic}
            category={
              categories?.filter(
                (category) => category.id === products[id].category
              )[0]?.name || ""
            }
            ownerLastVisit={products[id].buissness_owner_last_visit}
            setCommentsStatus={(data) => setCommentIsOpen(data)}
          />

          <Comments
            isOpen={commentIsOpen}
            // refreshPageContent={() => setRefreshPage(true)}
            setIsOpen={() => setCommentIsOpen(false)}
            id={products[id].id}
            comments={products[id].comment}
          />
          <BuyProduct
            productQuantity={toPersianNumber(products[id].stock)}
            productDeliveryTime={`${toPersianNumber(
              products[id].delivery_time
            )} روز`}
            productPrice={products[id].price}
            productID={products[id].id}
            shppingCity={products[id]?.send_from?.name}
          />
        </div>
        <div className="product-info-container">
          <ProductBanner
            productName={products[id].name}
            productbanners={imageList}
            creditSale={products[id]?.credit_sale}
          />
          <ProductFeatures features={products[id].features} />
          <AboutProduct productDetails={products[id].detail} />
        </div>
      </div>
      {products[id]?.others?.length > 0 && (
        <div
          style={{
            marginBottom: "20px",
            padding: "15px",
            backgroundColor: "white",
          }}
        >
          <Typography
            variant="h6"
            sx={{ direction: "rtl", marginBottom: "5px" }}
          >
            محصولات دیگر این فروشگاه:
          </Typography>
          <OtherStoreProducts otherProducts={products[id].others} />
        </div>
      )}
    </div>
  ) : null;
};

const mapStateToProps = (state) => ({
  products: state.product,
});

export default connect(mapStateToProps, { fetchProduct })(ProductComponent);
