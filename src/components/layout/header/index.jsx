// Modules
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Redux
import { useSelector } from 'react-redux';

//mui components---------------------
import { Badge, IconButton } from "@mui/material";
import { styled } from "@mui/material";
import { Box } from '@mui/material';
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
import bannerImg from "../../../assets/imgs/header_1.jpg"
// api
import { getAllBanners } from "../../../api/api"


const Header = ({ isOpenDrawer, setOpenDrawer }) => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    // setLoading(true);
    Promise.all([getAllBanners()])
      .then((results) => {
        setBanners(results[0].data);
      })
      .finally(() => {
        // setLoading(false);
      });
  }, []);

  const state = useSelector(state => state.cartState);

  return (
    <Box position={"fixed"} top="0" zIndex={50}>
      <Box position={"relative"} display={"block"} zIndex={"100"} top={0}>
        {/* banners.header_banner */}
        <img src={bannerImg} alt="" sx={{ Object: "cover" }} />
      </Box>
      <StyledNav>
        <FlexNavContainer>
          <IconButton
            sx={{
              fontSize: "2.5rem",
              backgroundColor: "var(--light-blue)",
              color: "#121212",
            }}
            onClick={(e) => {
              e.stopPropagation();
              setOpenDrawer((old) => !old)
            }}>

            {isOpenDrawer ?
              <CloseIcon fontSize="inherit" /> : <MenuIcon fontSize="inherit" />
            }
          </IconButton>

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
              <IconButton sx={{
                fontSize: "2.5rem",
                backgroundColor: "var(--light-blue)",
                color: "#121212",
              }}>
                <Badge badgeContent={state.itemsCounter} color="primary" className="badge"></Badge>
                <ShoppingBagOutlinedIcon fontSize="inherit" />
              </IconButton>
            </Link>
          </StyledNavLeftBar>
        </FlexNavContainer>
      </StyledNav>
    </Box>
  );
};

export default Header;
