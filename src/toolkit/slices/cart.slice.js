import { Merge } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";


const sumItems = state => {
  const items = state.selectedItems;
  state.itemsCounter = items.reduce((total, product) => total + product.quantity, 0);
  state.sendPrice = items.reduce((total, product) => total + product.sendPrice, 0);
  state.total = items.reduce((total, product) => total + product.price * product.quantity, 0);
  state.offers = items.reduce((total, product) => total + ((product.price * product.offer / 100) * product.quantity), 0);
  const numbers = [];
  items.map(item => numbers.push(item.shop))
  const newNumbers = [...new Set(numbers)];
  state.shops = newNumbers.length;
}

export const cartSlice = createSlice({
  name: "cartState",
  initialState: {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    offers: 0,
    shops: 0,
    sendPrice: 0,
    step: 0,
    checkout: false,
    idCart: "",
  },
  reducers: {
    addItem: (state, action) => {
      if (!state.selectedItems.find(item => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        })
        state.checkout = false;
        sumItems(state)
      }
    },

    removeItem: (state, action) => {
      state.selectedItems = state.selectedItems.filter(item => item.id !== action.payload.id);
      sumItems(state);
    },

    increase: (state, action) => {
      const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
      state.selectedItems[indexI].quantity++;
      sumItems(state);
    },

    decrease: (state, action) => {
      const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id);
      state.selectedItems[indexD].quantity--;
      sumItems(state)
    },

    checkout: () => {
      return{
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        offers: 0,
        shops: 0,
        sendPrice: 0,
        step: 0,
        checkout: true
      }
    },

    stepPlus: (state) => {
      state.step += 1;
    },

    stepMinus: (state) => {
       state.step -= 1;
    },

    clear: (state) => {
      state = {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        offers: 0,
        shops: 0,
        sendPrice: 0,
        step: 0,
        checkout: false
      }
    },

    stepDefault: (state) => {
      state.step = 0
    },

    setIdCart: (state, action) => {
      state.idCart = action.payload;
    },
  }
});

export const {
  addItem,
  removeItem,
  increase,
  decrease,
  checkout,
  stepPlus,
  stepMinus,
  clear,
  stepDefault,
  setIdCart,
  sendToCart
} = cartSlice.actions;

export default cartSlice.reducer;
