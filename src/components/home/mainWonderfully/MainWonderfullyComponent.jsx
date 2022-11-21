import React, { useEffect } from "react";

import { FlexMainBanner } from "./styledMainWonderfully";

import { GlobalBannerContainer } from "../../../global/styles/GlobalBannerContainer";

import basketImg from "../../../assets/imgs/basket.png";
import wonderImg from "../../../assets/imgs/wonder.png";

import MainGoToWonderfully from "../mainGoToWonderfullyDiv/mainGoToWonderfully";

const MainWonderfullyComponent = ({ discount }) => {
  // const dispatch = useDispatch();
  // const state = useSelector(mainBanner);
  // const status = useSelector(BannerStatus);

  // useEffect(() => {
  //   if (state.length <= 0) {
  //     dispatch(getAllBannerImg(MAIN_BANNERS));
  //   }
  // }, [state.length, dispatch]);

  // const state = [img1, img2];
  return (
    <GlobalBannerContainer
      style={{
        backgroundColor: "#EAEFE8",
      }}
    >
      <FlexMainBanner>
        <div className="basketImg-div">
          <img src={basketImg} className="basketImg" />
        </div>
        <div className="wonderImg-div">
          <img src={wonderImg} className="wonderImg" />
        </div>
        <div className="discount_div">
          <p className="discount_div--discountTitle">
            تا %
            <br />
            <span> {discount} </span> تخفیف
          </p>
        </div>
        <div className="products-div">
          <MainGoToWonderfully />
        </div>
      </FlexMainBanner>
    </GlobalBannerContainer>
  );
};

export default MainWonderfullyComponent;
