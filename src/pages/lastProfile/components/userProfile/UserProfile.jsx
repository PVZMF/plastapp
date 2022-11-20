import React from "react";

import { Link, NavLink, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Paper,
  IconButton,
  Typography,
  Avatar,
  Divider,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditIcon from "@mui/icons-material/Edit";
import { styled } from "@mui/material/styles";

const language = {
  wallet: "کیف پول",
  currncy: "تومان",
};

const UserProfile = ({ user }) => {
  const navigate = useNavigate();
  if (user == null)
    return navigate("/", {
      replace: true,
    });

  const CustomIconButton = styled(IconButton)({
    width: "60px",
    height: "60px",
  });

  const profileTabs = [
    {
      url: "/profile/business",
      title: "ثبت فروشگاه",
      business: user?.user_type === "B",
    },
    {
      url: "/profile/financial",
      title: "تاریخچه سفارشات",
      business: user?.user_type === "B",
    },
    {
      url: "/profile/purchases",
      title: "محصولات خریداری شده",
      business: user?.user_type === "C",
    },
    {
      url: "/profile/myProducts",
      title: "محصولات فروشگاه من",
      business: user?.user_type === "B",
    },
    {
      url: "/profile/add-product",
      title: "افزودن محصول",
      business: user?.user_type === "B",
    },
  ];

  function IsBusinessAccount(link, i) {
    if (link.business) {
      return (
        <ListItemButton sx={{ padding: "0" }} key={i}>
          <NavLink
            to={link.url}
            style={{
              width: "100%",
              height: " 100%",
              textAlign: "right",
              padding: "5px",
              marginBottom: "5px",
            }}
          >
            {link.title}
          </NavLink>
        </ListItemButton>
      );
    } else return null;
  }

  return (
    <Box>
      <Paper p={2}>
        <Grid container p={2}>
          <Grid
            item
            lg={12}
            display="flex"
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={2}
          >
            <CustomIconButton
              aria-label="user picture"
              component="label"
              disabled
            >
              {user.image ? (
                <Avatar alt="Remy Sharp" src={user.imgae} />
              ) : (
                <AccountCircleIcon
                  color="gray"
                  sx={{ width: "100%", height: "100%" }}
                />
              )}
            </CustomIconButton>
            <Typography component="h1" variant="body1" fontWeight="bold">
              {user?.fullname}
            </Typography>

            <IconButton
              aira-label="edit user"
              component="label"
              sx={{ width: "37px", height: "40px" }}
            >
              <EditIcon
                sx={{ width: "100%", height: "100%" }}
                color="primary"
              />
            </IconButton>
          </Grid>

          <Grid
            item
            lg={12}
            display="flex"
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={2}
            paddingRight="10%"
            marginY={2}
          >
            <Typography component="h3" variant="h6">
              {language.wallet}
            </Typography>

            <Typography component="h3" variant="body1">
              {user.wallet} {language.currncy}
            </Typography>
          </Grid>

          <Divider variant="middle" sx={{ width: "90%" }} />

          <Grid item lg={12} marginY={2}>
            <List dir="rtl">
              {profileTabs.map((link, i) => {
                return IsBusinessAccount(link, i);
              })}
            </List>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(UserProfile);
