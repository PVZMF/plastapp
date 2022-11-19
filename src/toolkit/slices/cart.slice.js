import { createSlice } from "@reduxjs/toolkit";

const sumItems = (items) => {
  const itemsCounter = items.reduce((total, product) => total + product.quantity, 0);
  let total = items.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
  return {itemsCounter, total}
}

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkout: false
  },
  reducers: {
    login: (state, action) => {
      const payload = action.payload;
    },
    addItemToCart: (state, action) => {
      if (!state.selectedItems.find(item => item.id === action.payload.id)) {
        state.selectedItems.push({
            ...action.payload,
            quantity: 1
        })
      }
      return {
          ...state,
          selectedItems: [...state.selectedItems],
          ...sumItems(state.selectedItems),
          checkout: false
      }
    },
    removeItemFromCart: (state, action) => {
      const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id);
        return {
          ...state,
          selectedItems: [...newSelectedItems],
          ...sumItems(newSelectedItems)
        }
    },
    increaseItemFromCart: (state, action) => {
      const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
      state.selectedItems[indexI].quantity++;
      return {
          ...state,
          ...sumItems(state.selectedItems)

      }
    },
    decreaseItemFromCart: (state, action) => {
      const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id);
      state.selectedItems[indexD].quantity--;
      return {
          ...state,
          ...sumItems(state.selectedItems)

      }
    },
    clearCart: (state) => {
      return {
          selectedItems: [],
          itemsCounter: 0,
          total: 0,
          checkout: false
      }
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  increaseItemFromCart,
  decreaseItemFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
