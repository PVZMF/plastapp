import React from 'react'

import TopSection from './components/topSection'
import DownSection from './components/downSection'

import { FlexDetailProduct } from './styledDetail'

const Detail_Product = () => {
  return (
    <FlexDetailProduct>
        <TopSection />
        <hr />
        <DownSection />
    </FlexDetailProduct>
  )
}

export default Detail_Product