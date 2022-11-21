import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import { useState } from "react";
import React from "react";



const SideBarListItem = (props) => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((old) => !old);
  };
  if (props.childrenItems)
    return (
      <>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon sx={{color:"#69a8ff", minWidth:"auto",flexGrow:"0", ml:2 }}>{props.icon}</ListItemIcon>
          <ListItemText sx={{flexGrow:"0",'& span':{fontSize:"2.2rem"}}} primary={props.label} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {props.childrenItems.map((item, index) => (
              <ListItemButton key={index}>
                {/* <ListItemIcon sx={{color:"rgb(119, 119, 119)", minWidth:"auto",flexGrow:"0" }}> {item.icon}</ListItemIcon> */}
                <ListItemText sx={{flexGrow:"0",'& span':{fontSize:"1.3rem"}, marginX:"40px",marginY:0, color:"rgb(119, 119, 119)"}} primary={item.label} />
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
        <ListItemText sx={{flexGrow:"0",'& span':{fontSize:"2.2rem"}}}>{props.label}</ListItemText>
      </ListItemButton>
    );
};


export default SideBarListItem;
