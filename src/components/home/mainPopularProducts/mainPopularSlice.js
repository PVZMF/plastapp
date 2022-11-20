import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import callApi from "../../../../api/apiClient";

export const getAllPopular = createAsyncThunk(
  "mainPopular/products",
  async (service) => {
    const response = await callApi(service);
    return response;
  }
);

export const mainPopularSlice = createSlice({
  name: "mainPopular",
  initialState: {
    products: [],
    status: "idle",
    error: null,
  },

  extraReducers(builder) {
    builder.addCase(getAllPopular.pending, (state, action) => {
      state.status = "loading";
    });

    builder.addCase(getAllPopular.fulfilled, (state, action) => {
      state.status = "success";
      state.products = action.payload;
    });

    builder.addCase(getAllPopular.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
    });
  },
});

export const mainPopularProducts = (state) => state.homePopularReducer.products;
export const popularStatus = (state) => state.homePopularReducer.status;

export default mainPopularSlice.reducer;
