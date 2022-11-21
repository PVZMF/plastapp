// Modules
import React from "react";
import { Link } from "react-router-dom";

// Redux
import { useSelector } from 'react-redux';

//mui components---------------------
import { Badge, IconButton } from "@mui/material";
import { styled } from "@mui/material";
//mui icons--------------------------
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CloseIcon from '@mui/icons-material/Close';

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


const Header = ({ isOpenDrawer, setOpenDrawer }) => {

  const state = useSelector(state => state.cartState);

  return (
    <StyledNav>
      <GlobalContainer>
        <FlexNavContainer>
          <MainMenuButton
            onClick={() => setOpenDrawer((old) => !old)}
            onBlur={() => setOpenDrawer(false)}>
            {isOpenDrawer?
            <CloseIcon fontSize="inherit"/>:<MenuIcon fontSize="inherit" />
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
                <Badge badgeContent={state.itemsCounter} color="primary" className="badge"></Badge>
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
