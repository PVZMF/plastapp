import { Grid } from '@mui/material'
import React from 'react'
import Banner_Image from '../Banner_Image/Banner_Image'
import { GlobalBannerContainer } from '../../../global/styles/GlobalBannerContainer';


const ListBannerImages = ({ ListImg }) => {
    return (
        <GlobalBannerContainer>
            <Grid container spacing={1}>
                {ListImg.map(item => {
                    return (
                        <Grid item xs={6} md={3} >
                            <Banner_Image src={item.src} link={item.link} />
                        </Grid >)
                })
                }
            </Grid>
        </GlobalBannerContainer>
    )
}

export default ListBannerImages