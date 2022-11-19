import React from 'react'
import Baskets from './baskets'
import Receipt from './receipt'

import { FlexTopCart } from './styledTopCart'

const TopMainCart = () => {
  return (
    <FlexTopCart>

      <div className='baskets'>
        <Baskets />
      </div>

      <div className='receipt'>
        <Receipt />
      </div>
    </FlexTopCart>
  )
}

export default TopMainCart