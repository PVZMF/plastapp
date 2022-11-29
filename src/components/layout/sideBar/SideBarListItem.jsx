import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import { useState,useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";


const SideBarListItem = (props) => {
  const [open, setOpen] = useState(false);
  const handleClick = (e) => {
    setOpen((old) => !old);
  };
      useEffect(() => {
        if(props.isOpenDrawer)setOpen(false);
      }, [props.isOpenDrawer]);

  if (props.childrenItems)
    return (
      <>
        <ListItemButton onClick={(e) => handleClick(e)}>
          <ListItemIcon sx={{ color: "#69a8ff", minWidth: "auto", flexGrow: "0", ml: 2 }}>{props.icon}</ListItemIcon>
          <ListItemText sx={{ flexGrow: "0", '& span': { fontSize:{xs:"1rem",md:"1.4rem",lg:"1.7rem"} } }} primary={props.label} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto">
          <List component="div" disablePadding>
            {props.childrenItems.map((item, index) => (
              <Link to={item.link}>
                <ListItemButton key={index}>
                  {/* <ListItemIcon sx={{color:"rgb(119, 119, 119)", minWidth:"auto",flexGrow:"0" }}> {item.icon}</ListItemIcon> */}
                  <ListItemText sx={{ flexGrow: "0", '& span': { fontSize:{xs:"0.9rem",md:"1rem",lg:"1.2rem"} }, marginRight: "25px", marginY: 0, color: "rgb(119, 119, 119)" }} primary={item.label} />
                </ListItemButton>
              </Link>
            ))}
          </List>
        </Collapse>
      </>
    );
  else
    return (
      <Link to={props.link}>
        <ListItemButton onClick={props.onClick}>
          <ListItemIcon sx={{ color: "#69a8ff", minWidth: "auto", flexGrow: "0", ml: 2 }}>{props.icon}</ListItemIcon>
          <ListItemText sx={{ flexGrow: "0", '& span': { fontSize:{xs:"1rem",md:"1.4rem",lg:"1.7rem"} } }}>{props.label}</ListItemText>
        </ListItemButton>
      </Link>
    );
};


export default SideBarListItem;
