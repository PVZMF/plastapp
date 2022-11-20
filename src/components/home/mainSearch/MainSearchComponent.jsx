import React from "react";

import { FlexMainSearch, MainSearchContainer } from "./mainSearchStyled";

import detective from "../../../assets/imgs/detective.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import { HomeLan } from "../../../json/language/fa";
import { GlobalContainer } from "../../../global/styles/globalContainer";
import { GlobalButton } from "../../../global/styles/GlobalButton";

import { globalCssVar } from "../../../global/styles/globalStyles";

const MainSearchComponent = () => {
  return (
    <MainSearchContainer>
      <GlobalContainer>
        <FlexMainSearch>
          <div className="img_holder">
            <img className="img_holder--img" src={detective} alt="" />
          </div>

          <div className="search_box">
            <div className="search_box_holder">
              <GlobalButton
                className="search_box--button d_flex--1"
                color={globalCssVar.light_blue}
              >
                <LocationOnOutlinedIcon fontSize="large" />
                {HomeLan.search_input_button}
              </GlobalButton>

              <input className="search_box--input" type="text" />
            </div>

            <GlobalButton
              color={globalCssVar.primary_blue}
              className="search_box--submit"
            >
              {HomeLan.search_button}
            </GlobalButton>
          </div>
        </FlexMainSearch>
      </GlobalContainer>
    </MainSearchContainer>
  );
};

export default MainSearchComponent;
