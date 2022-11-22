import React from 'react'

import TopSection from './components/topSection'
import DownSection from './components/downSection'

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