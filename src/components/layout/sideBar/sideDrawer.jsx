import React from "react";
import Drawer from "@mui/material/Drawer";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import SideBarListItem from "./SideBarListItem";
import sidebarItems from "./sidebarItems";

const Sidebar = ({ isOpenDrawer }) => {
    return (
        <Drawer
            anchor="right"
            variant="persistent"
            open={isOpenDrawer}
            sx={{
                width: isOpenDrawer ? 200 : 0,
                flexShrink: 0,
            }}
        >
            <List
                sx={{ width: 200, bgcolor: "background.paper" }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <Box height={"65px"} />
                {sidebarItems.map((item, index) => (
                    <SideBarListItem
                        key={index}
                        label={item.title}
                        icon={item.icon}
                        childrenItems={item.children ? item.children : ""}
                    />
                ))}
            </List>
        </Drawer>
    );
};

export default Sidebar;