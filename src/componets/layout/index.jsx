import React, { useState } from 'react'
import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";
import { NavLink } from 'react-router-dom';

import Footer from './footer'
import Header from './header'
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CancelIcon from "@mui/icons-material/Cancel";

import { sidebarMenue } from './sidebar';
import { mainCategories } from './mainCategorySlice';

import { Sidebar } from './styledLayout';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCat, setIsOpenCat] = useState(false);

  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => {
    return(
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
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
              };
  // const pathName = useLocation().pathname;

  return (
    <React.Fragment>
        <Header isOpen={isOpen} btnHandler={toggleDrawer("right", true)} />
        <aside>
          <div>
            <React.Fragment key={"right"}>
              <Drawer
                anchor={"right"}
                open={state["right"]}
                onBlur={() => {
                  toggleDrawer("right", false);
                }}
              >
                <Button onClick={toggleDrawer("right", false)}>
                  <CancelIcon fontSize="inherit" style={{ fontSize: "2rem" }} />
                </Button>
                {list("right")}
              </Drawer>
              
            </React.Fragment>
          </div>
        </aside>

        <main>{children}</main>
        <Footer />
    </React.Fragment>
  );
};

export default Layout;