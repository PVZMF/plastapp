import * as React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../toolkit/slices/auth';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { IconButton, Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import { MdOutlineDashboard } from "react-icons/md";
import { BiExit } from "react-icons/bi";
import { onToasted } from '../../toolkit/slices/toasted.slice';



export default function ClickAway() {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setOpen(false);
    };

    const styles = {
        position: 'absolute',
        top: 28,
        left: "6px",
        zIndex: 1,
        border: '1px solid',
        bgcolor: 'background.paper',
        width: "160px",
        overflow: 'hidden',
    };

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Box sx={{ position: 'relative', width: "100%" }}>
                <IconButton type="button" onClick={handleClick}>
                    <AccountCircleIcon fontSize="large" />
                </IconButton>

                {open ? (
                    <Box borderRadius="10px" sx={styles} onClick={() => setOpen(false)}>
                        <List
                            sx={{
                                width: '100%',
                                maxWidth: "3600px",
                                bgcolor: 'background.paper',
                                position: 'relative',
                                overflow: 'hidden',
                                maxHeight: 300,
                            }}
                            subheader={<li />}
                        >
                            <li>
                                <Link to="/profile">
                                    <ul>
                                        <ListSubheader><MdOutlineDashboard /> پروفایل</ListSubheader>
                                    </ul>
                                </Link>
                            </li>
                            <li>
                                <ul onClick={() => { dispatch(logout()); dispatch(onToasted()) }}>
                                    <ListSubheader sx={{ cursor: "pointer" }}><BiExit /> <Link to="../">خروج از حساب کاربری </Link></ListSubheader>
                                </ul>
                            </li>

                        </List>
                    </Box>
                ) : null}
            </Box>
        </ClickAwayListener>
    );
}