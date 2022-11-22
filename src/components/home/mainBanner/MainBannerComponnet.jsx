// Modules
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// Functions
// import callApi from "../../../../api/apiClient";

// Constants
// import { MAIN_ADV_BANNERS } from "../../../../service/homeService";
// import { BASE_URL } from "../../../../api/apiClient";

// Components
import { FlexMainBanner } from "./styledMainBanner";
import { GlobalBannerContainer } from "../../../global/styles/GlobalBannerContainer";

const MainBannerComponnet = ({ start, end }) => {
  const [images, setImages] = useState([]);

  return (
    <GlobalBannerContainer className="bannerContainer">
      <FlexMainBanner>
        {images.slice(start, end).map((item, i) => {
          return (
            <div className="image-wrapper" key={i}>
              <NavLink to={`${item.url}`}>
                <img
                  className="banner"
                  src={`https://plastapp.iran.liara.run/${item.image}`}
                  alt=""
                />
              </NavLink>
            </div>
          );
        })}
      </FlexMainBanner>
    </GlobalBannerContainer>
  );
};

export default MainBannerComponnet;
