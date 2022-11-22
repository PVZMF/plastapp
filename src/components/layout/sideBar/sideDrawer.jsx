
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import SideBarListItem from "./SideBarListItem";
import sidebarItems from "./sidebarItems";
import { ClickAwayListener } from '@mui/base';
import { useEffect,useState } from 'react';


function handleOutSide(e, setOpenDrawer) {
    setOpenDrawer(false);
    e.stopPropagation();
}
const Sidebar = ({ isOpenDrawer, setOpenDrawer }) => {


    return (

        <ClickAwayListener onClickAway={(e) => handleOutSide(e, setOpenDrawer)} >
            <Drawer
                anchor="right"
                variant="persistent"
                open={isOpenDrawer}
                marginTop="100px"

                sx={{
                    width: isOpenDrawer ? 100 : 0,
                    flexShrink: 0,
                    [`& .MuiPaper-root`]: {
                        position: "fixed",
                        borderTop: "1px solid gray",
                        marginTop: { xs: "9.5vw", sm: "8.5vw", md: "7.5vw", lg: "6.5vw", xl: "5.5vw" },
                        zIndex: "25"
                    }
                }}
            >
                <List
                    sx={{ width:{xs:170,md:240,lg:270}, bgcolor: "background.paper" }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    {sidebarItems.map((item, index) => (
                        <SideBarListItem
                            key={index}
                            label={item.title}
                            icon={item.icon}
                            link= {item.link}
                            childrenItems={item.children ? item.children : ""}
                            isOpenDrawer={isOpenDrawer}
                        />
                    ))}
                </List>
            </Drawer>
        </ClickAwayListener>
    );
};

export default Sidebar;