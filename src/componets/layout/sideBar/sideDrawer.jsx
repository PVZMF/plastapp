import React from 'react'
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import CancelIcon from "@mui/icons-material/Cancel";

const sideDrawer = () => {
    return (
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
    )
}

export default sideDrawer