import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const AllProductsSlide = ({link}) => {

  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} height="100%" >
      <Link to={link}>
        <Typography variant='h3' color="blue" >
          نمایش تمام محصولات
        </Typography>
      </Link>
    </Box>
  )
}

export default AllProductsSlide