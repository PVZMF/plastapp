import React from "react";

import { Outlet } from "react-router-dom";
import RenderIfLoggedIn from "./components/render-if-logged-in/index";

import { Box, Grid } from "@mui/material";
import {
  containerStyles,
  contentStyles,
  profile_containerStyles,
  profile_right_section,
  profile_left_section,
} from "./profileStyles";

import UserImage from '../../assets/imgs/detective.png'

import UserProfile from "./components/userProfile/UserProfile";

function Profile({ user }) {
  return (
    // <RenderIfLoggedIn mustLoggedIn={false}>
      <Box sx={containerStyles}>
        {/* header */}
        <Box sx={contentStyles}>
          <Grid container spacing={1} sx={profile_containerStyles}>
            <Grid xl={4} lg={4} item sx={profile_right_section}>
              <UserProfile user={user} />
            </Grid>

            <Grid xl={8} lg={8} item sx={profile_left_section}>
              <Outlet />
            </Grid>
          </Grid>
        </Box>
      </Box>
    // </RenderIfLoggedIn>
  );
}

export default Profile;

Profile.defaultProps = {
  user: {
    fullname: 'علی داوودی',
    image: UserImage,
    wallet: 150000,
  }
}
