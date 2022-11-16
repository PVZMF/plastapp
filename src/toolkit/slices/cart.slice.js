import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "name",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const payload = action.payload;
    },
    removeItem: (state, action) => {

    },
    decreaseItemFromCart: (state, action) => {
      const payload = action.payload;
      const item = state.find((p) => p.id === payload.id);
      const index = state.findIndex((p) => p.id === payload.id);
      if (item.count > 1) {
        state[index].count -= 1;
      } else {
        state.splice(index, 1);
      }
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
