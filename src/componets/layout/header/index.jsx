// Modules
import React from "react";
import { Link } from "react-router-dom";

//mui components---------------------
import { IconButton } from "@mui/material";
import { styled } from "@mui/material";
//mui icons--------------------------
import MenuIcon from "@mui/icons-material/Menu";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import {
  FlexNavContainer,
  StyledNav,
  StyledNavLeftBar,
  StyledNavLogo,
} from "./styledNav/styledNav";

// images------------------------
import imgLogo from "../../../assets/imgs/plastAppLogo.png";
import { navLan } from "../../../json/language/fa";
import { GlobalButton } from "../../../global/styles/GlobalButton";
import { globalCssVar } from "../../../global/styles/globalStyles";
import { GlobalContainer } from "../../../global/styles/globalContainer";

const MainMenuButton = styled(IconButton)({
  fontSize: "2.5rem",
  backgroundColor: "var(--light-blue)",
  color: "#121212",
});



const Header = ( {isOpen, btnHandler} ) => {

  return (
    <StyledNav>
      <GlobalContainer>
        <FlexNavContainer>
          <MainMenuButton onClick={btnHandler}>
            { isOpen ?
            <CloseOutlinedIcon fontSize="inherit" /> :
            <MenuIcon fontSize="inherit" />
            }
          </MainMenuButton>

          <StyledNavLogo>
            <Link to="/">
              <img src={imgLogo} alt="logo" />
            </Link>
          </StyledNavLogo>


          <StyledNavLeftBar>
            <GlobalButton color={globalCssVar.light_blue}>
              {navLan.login_button}
            </GlobalButton>

            <Link to="/cart">
              <MainMenuButton>
                <ShoppingBagOutlinedIcon fontSize="inherit" />
              </MainMenuButton>
            </Link>
          </StyledNavLeftBar>

        </FlexNavContainer>
      </GlobalContainer>
    </StyledNav>
  );
};

export default Header;