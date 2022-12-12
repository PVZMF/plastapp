import { createSlice } from "@reduxjs/toolkit";


export const toastedSlice = createSlice({
  name: "toasted",
  initialState: {
    onToasted: false,
    counter: false,
    isCreateAccount: false,
    isChangePassword: false,
    acceptCheque: false,
    notAcceptCheque: false,
  },
  reducers: {
    offToasted: (state) => {
      state.onToasted = false;
      state.isChangePassword = false;
      state.isCreateAccount = false;
      state.acceptCheque = false;
      state.notAcceptCheque = false;
    },
    toggleIsCreateAccount: (state) => {
      state.isCreateAccount = true;
      state.onToasted = true
    },
    toggleIsChangePassword: (state) => {
      state.isChangePassword = true;
      state.onToasted = true
    },
    toggleIsAcceptCheque: (state) => {
      state.acceptCheque = true;
      state.onToasted = true
    },
    toggleIsNotAcceptCheque: (state) => {
      state.notAcceptCheque = true;
      state.onToasted = true
    },
    onToasted: (state) => {
      state.onToasted = true
    }

  },
});

export const { offToasted,
  toggleIsCreateAccount,
  toggleIsChangePassword,
  toggleIsAcceptCheque,
  toggleIsNotAcceptCheque,
  onToasted
} = toastedSlice.actions;

export default toastedSlice.reducer;