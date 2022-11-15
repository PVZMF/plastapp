import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import callApi from "../../api/apiClient";

export const getAllCategories = createAsyncThunk(
  "mainCategory/categories",
  async (service) => {
    const response = await callApi(service);
    return response;
  }
);

export const mainCategorySlice = createSlice({
  name: "mainCategory",
  initialState: {
    categories: [],
    status: "idle",
    error: null,
  },

  extraReducers(builder) {
    builder.addCase(getAllCategories.pending, (state, action) => {
      state.status = "loading";
    });

    builder.addCase(getAllCategories.fulfilled, (state, action) => {
      state.status = "success";
      state.categories = action.payload;
    });

    builder.addCase(getAllCategories.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
    });
  },
});

export const mainCategories = (state) => state.homeCategoriesReducer.categories;
export const categoryStatus = (state) => state.homeCategoriesReducer.status;

export default mainCategorySlice.reducer;
