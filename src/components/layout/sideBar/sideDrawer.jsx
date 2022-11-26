import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import SideBarListItem from "./SideBarListItem";
import sidebarItems from "./sidebarItems";
import { ClickAwayListener } from '@mui/base';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { logout } from "../../../toolkit/slices/auth";



function handleOutSide(e, isOpenDrawer, setOpenDrawer) {
    if (isOpenDrawer) {
        setOpenDrawer(false);
        e.preventDefault();
    }
}

const Sidebar = ({ isOpenDrawer, setOpenDrawer }) => {

    const isLogin = useSelector(state => state.auth.isLogin);
    const dispatch = useDispatch();
    const listItemLogin = isLogin ? {
        title: "خروج از حساب کاربری",
        icon: <AccountBoxIcon fontSize="large" />,
        onClick: () => {dispatch(logout())},
        link: "/login"
    } : { title: "ورود به حساب کاربری", icon: <AccountBoxIcon fontSize="large" />, onClick: () => { }, link: "/login" }
    useEffect(() => {
        setOpenDrawer(false);
    }, [useLocation().pathname]);
    const sidebarList = sidebarItems(isLogin);
    return (

        <ClickAwayListener onClickAway={(e) => handleOutSide(e, isOpenDrawer, setOpenDrawer)} >
            <Drawer
                anchor="right"
                variant="persistent"
                open={isOpenDrawer}

                sx={{
                    width: isOpenDrawer ? 100 : 0,
                    flexShrink: 0,
                    [`& .MuiPaper-root`]: {
                        position: "absolute",
                        borderTop: "1px solid gray",
                        marginTop: { xs: "9vw", sm: "6.5vw", md: "6vw", lg: "6.5vw", xl: "5.5vw" },
                        zIndex: "25"
                    }
                }}
            >
                <List
                    sx={{ width: { xs: 170, md: 240, lg: 270 }, bgcolor: "background.paper" }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    {sidebarList.map((item, index) => (
                        <SideBarListItem
                            key={index}
                            label={item.title}
                            icon={item.icon}
                            link={item.link}
                            onClick={item.onClick}
                            childrenItems={item.children ? item.children : ""}
                            isOpenDrawer={isOpenDrawer}
                        />
                    ))}

                    <SideBarListItem
                        key={"Login"}
                        label={listItemLogin.title}
                        icon={listItemLogin.icon}
                        link={listItemLogin.link}
                        onClick={listItemLogin.onClick}
                        childrenItems={listItemLogin.children ? listItemLogin.children : ""}
                        isOpenDrawer={isOpenDrawer}
                    />
                </List>
            </Drawer>
        </ClickAwayListener>
    );
};

export default Sidebar;