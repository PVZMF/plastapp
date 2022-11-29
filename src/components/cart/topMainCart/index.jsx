import React, { useState } from 'react'
import Address from './address'
import Baskets from './baskets'
import Receipt from './receipt'

import { FlexTopCart } from './styledTopCart'

const TopMainCart = () => {

  const [step, setStep] = useState(0)
  return (
    <FlexTopCart>

      <div className='baskets'>
        {step === 0 && <Baskets />}
        {step === 1 && <Address step={step} setStep={setStep} />}
      </div>

      <div className='receipt'>
        <Receipt step={step} setStep={setStep} />
      </div>
    </FlexTopCart>
  )
}

export default TopMainCart