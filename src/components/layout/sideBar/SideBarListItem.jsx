import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import { useState } from "react";
import React from "react";
import {Styles } from "@mui/material";



const SideBarListItem = (props) => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((old) => !old);
  };
  if (props.childrenItems)
    return (
      <>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>{props.icon}</ListItemIcon>
          <ListItemText primary={props.label} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {props.childrenItems.map((item, index) => (
              <ListItemButton key={index} sx={{display: "flex", flexDirection:"row", margin:"20px"} }>
                <ListItemIcon> {item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </>
    );
else
    return (
      <ListItemButton>
        <ListItemIcon sx={{color:"#69a8ff", minWidth:"auto",flexGrow:"0", ml:2 }}>{props.icon}</ListItemIcon>
        <ListItemText sx={{flexGrow:"0",'& span':{fontSize:"1.3rem"}}}>{props.label}</ListItemText>
      </ListItemButton>
    );
};


export default SideBarListItem;
