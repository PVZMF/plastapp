import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import callApi from "../../../../api/apiClient";

export const getAllSuggested = createAsyncThunk(
  "mainSuggested/products",
  async (service) => {
    const response = await callApi(service);
    return response;
  }
);

export const mainSuggestedSlice = createSlice({
  name: "mainSuggested",
  initialState: {
    products: [],
    status: "idle",
    error: null,
  },

  extraReducers(builder) {
    builder.addCase(getAllSuggested.pending, (state, action) => {
      state.status = "loading";
    });

    builder.addCase(getAllSuggested.fulfilled, (state, action) => {
      state.status = "success";
      state.products = action.payload;
    });

    builder.addCase(getAllSuggested.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
    });
  },
});

export const mainSuggestedProducts = (state) =>
  state.homeSuggestedReducer.products;
export const suggestedStatus = (state) => state.homeSuggestedReducer.status;

export default mainSuggestedSlice.reducer;
