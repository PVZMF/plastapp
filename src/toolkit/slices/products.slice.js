import { DELETE_PRODUCT_LIST, SET_PRODUCTS } from "../../store/actions/actionTypes";
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    SET_PRODUCTS: (state, action) => {
      return action,payload;
    },
    DELETE_PRODUCT_LIST: (state, action) => {
      return initialState;
    },
    default: (state, action) => {
      return state;
    }
  },
},
);

export const {
  DELETE_PRODUCT_LIST,
  SET_PRODUCTS,
} = products.actions;

export default products.reducer;
