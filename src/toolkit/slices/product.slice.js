import { FETCH_PRODUCT } from "../../store/actions/actionTypes";
import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
  name: "product",
  initialState: [],
  reducers:{
    FETCH_PRODUCT:(state, action) => {
      state =  { ...state, [id]: payload };
    }
  }
});

export default product;
