import React from 'react'
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import { sidebarMenue } from './sidebar';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";


const contentDrawer = () => {
  return (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />
      <List>
        {sidebarMenue.map((item) => (
          <Sidebar key={item.title}>
            <ListItem disablePadding>
              {item.child ? (
                <ListItemButton
                  onClick={(event) => {
                    setIsOpenCat((prev) => !prev);
                  }}
                >
                  <ListItemIcon className="icon">{item.icon}</ListItemIcon>
                  {item.title}
                </ListItemButton>
              ) : (
                <ListItemButton onClick={toggleDrawer(anchor, false)}>
                  <ListItemIcon className="icon">{item.icon}</ListItemIcon>
                  <NavLink to={`${item.link}`}>
                    <ListItemText />

                    {item.title}
                  </NavLink>
                </ListItemButton>
              )}
            </ListItem>
            {item.child ? (
              <div className={isOpenCat ? "child-div" : "not_show"}>
                {/* {mainCategories?.map((item) => (
                  <ListItemButton key={item?.id}>
                      <NavLink to={`/category/${item.id}`}>
                      <ListItemText
                        fontSize="inherit"
                        style={{ textAlign: "right" }}
                      >
                        {item?.title}
                      </ListItemText>
                    </NavLink>
                  </ListItemButton>
                ))} */}
              </div>
            ) : null}
          </Sidebar>
        ))}
      </List>
    </Box>  
    )
}

export default contentDrawer