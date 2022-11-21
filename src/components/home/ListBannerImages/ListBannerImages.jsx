import { Grid } from '@mui/material'
import React from 'react'
import Banner_Image from '../Banner_Image/Banner_Image'
import { GlobalBannerContainer } from '../../../global/styles/GlobalBannerContainer';


const ListBannerImages = ({ ListImg }) => {
    return (
        <GlobalBannerContainer>
            <Grid container sx={{flexDirection:{sx:"column", md:"row"}}} flexWrap="nowrap" gap={1}  width="100%" margin={"15px auto"} >
                {ListImg.map(item => {
                    return (
                        <Grid item md={3} xs={12}>
                            <Banner_Image src={item.src} link={item.link} />
                        </Grid >)
                })
                }
            </Grid>
        </GlobalBannerContainer>
    )
}

export default ListBannerImages