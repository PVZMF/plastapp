import "./index.scss";
import axios from "axios";
import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { base_api_url } from "api";
import { preparedPrice } from "functions/numbers";
import { getItem } from "lcoalStorage";
import { connect } from "react-redux";

function BuyProduct({
  productDeliveryTime,
  productPrice = "",
  productID,
  productQuantity,
  shppingCity,
  user,
}) {
  const location = useLocation(),
    navigate = useNavigate();

  const addToCard = () => {
    if (!user) {
      navigate("/login", { state: { prevRoute: location.pathname } });
      return;
    }
    const accessToken = getItem("access");

    axios
      .post(
        `${base_api_url}/api/cartitems/`,
        {
          product: productID,
          quantity: 1,
          cart: null,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        navigate("/shopping-card");
      })
      .catch((err) => {});
  };

  return (
    <div className="buy-product-container">
      <div className="buy-product-information">
        <div>
          <h3>فروش محصول:</h3>
          <p>{productQuantity} عدد موجود</p>
        </div>
        <div>
          <h3>ارسال غرفه دار:</h3>
          <p>از {productDeliveryTime} دیگر</p>
        </div>
        <div>
          <h3>ارسال از:</h3>
          <p>{shppingCity}</p>
        </div>
      </div>
      <div>
        <div className="buy-product-price">
          <h3>قیمت محصول:</h3>
          <p>{preparedPrice(productPrice)} تومان</p>
        </div>
        <div className="buy-product-buy-button">
          <Button fullWidth onClick={addToCard}>
            {user ? "افزودن به سبد خرید" : "برای خرید اول وارد حساب خود شوید"}
          </Button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(BuyProduct);
