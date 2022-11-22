// Modules
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Redux
import { useSelector } from 'react-redux';

//mui components---------------------
import { Badge, IconButton} from "@mui/material";
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


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 5,
    border: `1px solid ${theme.palette.background.paper}`,
  },
}));

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
        <img src={bannerImg} alt="" sx={{ Object: "cover" }} />
      </Box>
      <StyledNav>
        <FlexNavContainer>
          <IconButton
            sx={{
              backgroundColor: "var(--light-blue)",
              color: "#121212",
            }}
            onClick={(e) => {
              e.stopPropagation();
              setOpenDrawer((old) => !old)
            }}>

            {isOpenDrawer ?
              <CloseIcon sx={{ fontSize: { xs: "small", sm: "medium", md: "medium", lg: "large" } }} /> : <MenuIcon sx={{ fontSize: { xs: "small", md: "mediume", lg: "large" } }} />
            }
          </IconButton>

          <StyledNavLogo>
            <Box sx={{ width: { xs: "70px", sm: "100px", md: "120px", lg: "150px" } }}>
              <Link to="/">
                <img src={imgLogo} width="100%" alt="logo" />
              </Link>
            </Box>
          </StyledNavLogo>
          <StyledNavLeftBar>
            <Box color={globalCssVar.light_blue} >
              <IconButton width="100%" sx={{ fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem", lg: "2rem" } }}>
                {navLan.login_button}
              </IconButton>
            </Box>
            <Link to="/cart">
              <IconButton sx={{
                backgroundColor: "var(--light-blue)",
                color: "#121212",
                fontSize: "10rem"
              }}>
                <StyledBadge badgeContent={state.itemsCounter} color="secondary">
                  <Badge color="primary" className="badge">
                  </Badge>
                </StyledBadge>
                <ShoppingBagOutlinedIcon sx={{ fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem", lg: "2rem" } }} />
              </IconButton>
            </Link>
          </StyledNavLeftBar>
        </FlexNavContainer>
      </StyledNav>
    </Box>
  );
};

export default Header;
