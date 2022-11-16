import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import callApi from "../../../../api/apiClient";

export const getAllWonderfullyProducts = createAsyncThunk(
  "mainWonderfullyProducts/products",
  async (service) => {
    const response = await callApi(service);
    return response;
  }
);

export const mainGoToWonderfullyProductsSlice = createSlice({
  name: "mainWonderfullyProducts",
  initialState: {
    products: [],
    status: "idle",
    error: null,
  },

  extraReducers(builder) {
    builder.addCase(getAllWonderfullyProducts.pending, (state, action) => {
      state.status = "loading";
    });

    builder.addCase(getAllWonderfullyProducts.fulfilled, (state, action) => {
      state.status = "success";
      state.products = action.payload;
    });

    builder.addCase(getAllWonderfullyProducts.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
    });
  },
});

export const mainWonderfullyProducts = (state) =>
  state.homeGoToWonderfullyProductsReducer.products;
export const wonderfullyProductsStatus = (state) =>
  state.homeGoToWonderfullyProductsReducer.status;

export default mainGoToWonderfullyProductsSlice.reducer;
