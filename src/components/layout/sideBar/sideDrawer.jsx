import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import SideBarListItem from "./SideBarListItem";
import SidebarItems from "./sidebarItems";
import { ClickAwayListener } from '@mui/base';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { logout } from "../../../toolkit/slices/auth";
import { onToasted } from "../../../toolkit/slices/toasted.slice";



function handleOutSide(e, isOpenDrawer, setOpenDrawer) {
    if (isOpenDrawer) {
        setOpenDrawer(false);
        e.preventDefault();
    }
}

const Sidebar = ({ isOpenDrawer, setOpenDrawer }) => {

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const listItemLogin = auth.isLogin ? {
        title: "خروج از حساب کاربری",
        icon: <AccountBoxIcon fontSize="large" />,
        onClick: () => { 
            dispatch(logout());
            dispatch(onToasted())
         },
        link: "../"
    } : { title: "ورود به حساب کاربری", icon: <AccountBoxIcon fontSize="large" />, onClick: () => {}, link: "/login" }
    useEffect(() => {
        setOpenDrawer(false);
    }, [useLocation().pathname]);
    const sidebarList = SidebarItems(auth, auth.isLogin );
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
                        position: "fixed",
                        borderTop: "1px solid gray",
                        marginTop: { xs: "10vw", sm: "7.5vw", md: "7vw", lg: "7.5vw", xl: "6.5vw" },
                        zIndex: "25"
                    }
                }}
            >
                <List
                    sx={{ width: { xs: 170, md: 240, lg: 270 }, bgcolor: "background.paper" }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    {sidebarList.filter(item => item.show).map((item, index) => (
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