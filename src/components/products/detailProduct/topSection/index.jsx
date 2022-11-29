import React from 'react'
import Attributes from './attributes'
import Receipt from './receipt'

import { FlexTopCart } from './styledTopCart'

const TopMainCart = () => {

  return (
    <FlexTopCart>
      <div className='attributes'>
        <Attributes />
      </div>
      <div className='receipt'>
        <Receipt />
      </div>
    </FlexTopCart>
  )
}

export default TopMainCart