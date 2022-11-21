import React from 'react'
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Banner_Image = ({ src, link}) => {
    return (
            <Link to={link} >
                <img src={src} alt="" width={"100%"} height={"100%"} />
            </Link>
    )
}

export default Banner_Image