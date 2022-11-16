// Modules
import React, { useEffect, useState } from "react";

// Functions
// import callApi from "../../../../api/apiClient";
import { NavLink } from "react-router-dom";

// Constants
// import {MAIN_BANNERS} from '../../../../service/homeService'

// Components
import { GlobalContainer } from "../../../global/styles/globalContainer";
import { FlexMainNoticeBanner } from "./styledNoticeBanner";


const MainNoticeBannerComponent = ( {row} ) => {
  const [images, setImages] = useState([])

  // const getData = async () => {
  //   const { data } = await callApi(MAIN_BANNERS);
  //   setImages(data);
  // }

  // useEffect(() => {
  //   getData();
  // }, [])

  if (row === 'first') {
    return (
      <GlobalContainer>
        <FlexMainNoticeBanner>
          {
            <React.Fragment>
              <div className="banner">
                <NavLink to={images.first_row_first_url}>
                  <img
                    className="banner--img"
                    src={images.first_row_first}
                    alt="alternate text"
                  />
                </NavLink>
              </div>
              <div className="banner">
                <NavLink to={images.first_row_second_url}>
                  <img
                    className="banner--img"
                    src={images.first_row_second}
                    alt="alternate text"
                  />
                </NavLink>
              </div>
            </React.Fragment>
          }
        </FlexMainNoticeBanner>
      </GlobalContainer>
    );
  }

  return (
    <GlobalContainer>
        <FlexMainNoticeBanner>
          {
            <React.Fragment>
              <div className="banner">
                <NavLink to={images.second_row_first_url}>
                  <img
                    className="banner--img"
                    src={images.second_row_first}
                    alt="alternate text"
                  />
                </NavLink>
              </div>
              <div className="banner">
              <NavLink to={images.second_row_second_url}>
                <img
                    className="banner--img"
                    src={images.second_row_second}
                    alt="alternate text"
                  />
                </NavLink>
              </div>
            </React.Fragment>
          }
        </FlexMainNoticeBanner>
      </GlobalContainer>
  )


};

export default MainNoticeBannerComponent;
