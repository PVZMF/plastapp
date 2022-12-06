import React, { useState } from "react";
import { useSelector } from "react-redux";

// Components

import Address from './address'
import Baskets from './baskets'
import BuyStep from './buyStep'
import Receipt from './receipt'

import { FlexTopCart } from "./styledTopCart";

const TopMainCart = () => {
  const [step, setStep] = useState(0);
  const state = useSelector((state) => state.cartState);

  return (
    <FlexTopCart>
      <div className="baskets">
        {state.step === 0 && <Baskets />}
        {state.step === 1 && <Address step={step} setStep={setStep} />}
        {state.step === 2 && <BuyStep step={step} setStep={setStep} />}
      </div>

      <div className="receipt">
        <Receipt step={step} setStep={setStep} />
      </div>
    </FlexTopCart>
  );
};

export default TopMainCart;
