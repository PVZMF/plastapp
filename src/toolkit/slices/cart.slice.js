import { createSlice } from "@reduxjs/toolkit";



export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    login: (state, action) => {
      const payload = action.payload;
    },
    removeItem: (state, action) => {

    },
    decreaseItemFromCart: (state, action) => {
      
    },
    clearCart: (state) => {
    },
  },
});


export const {
  addItemToCart,
  removeItemFromCart,
  decreaseItemFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
