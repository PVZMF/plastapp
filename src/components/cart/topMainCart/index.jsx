import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../../toolkit/slices/cart.slice";
// Components

import Address from './address'
import Baskets from './baskets'
import BuyStep from './buyStep'
import Receipt from './receipt'

import { FlexTopCart } from "./styledTopCart";

const TopMainCart = ({ open, setOpen }) => {
  const state = useSelector((state) => state.cartState);
  const dispatch = useDispatch();
  if(state.step === 1) dispatch(setModal(true));
  return (
    <FlexTopCart>
      <div className="baskets">
        {state.step < 2 && <Baskets />}
        {state.step === 2 && <Address  />}
        {state.step === 3 && <BuyStep  />}
      </div>

      <div className="receipt">
        <Receipt setOpen ={setOpen}/>
      </div>
    </FlexTopCart>
  );
};

export default TopMainCart;
