import React from 'react'

import TopSection from './topSection'
import DownSection from './downSection'

import { FlexDetailProduct } from './styledDetail'

const DetailProduct = () => {
  return (
    <FlexDetailProduct>
        <TopSection />
        <hr />
        <DownSection />
    </FlexDetailProduct>
  )
}

export default DetailProduct