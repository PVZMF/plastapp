import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import callApi from "../../../../api/apiClient";

export const getSomeProduct = createAsyncThunk(
  "mainSomeProducts/products",
  async (service) => {
    const response = await callApi(service);
    return response;
  }
);

export const mainProductsSlice = createSlice({
  name: "mainProducts",
  initialState: {
    products: [],
    status: "idle",
    error: null,
  },

  extraReducers(builder) {
    builder.addCase(getSomeProduct.pending, (state, action) => {
      state.status = "loading";
    });

    builder.addCase(getSomeProduct.fulfilled, (state, action) => {
      state.status = "success";
      state.products = action.payload;
    });

    builder.addCase(getSomeProduct.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
    });
  },
});

export const mainSomeProducts = (state) =>
  state.homeSomeproductsReducer.products;
export const mainProductsStatus = (state) =>
  state.homeSomeproductsReducer.status;

export default mainProductsSlice.reducer;
