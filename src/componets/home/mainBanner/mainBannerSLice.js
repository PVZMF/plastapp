import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import callApi from "../../../../api/apiClient";

export const getAllBannerImg = createAsyncThunk(
  "mainBanner/img",
  async (service) => {
    const response = await callApi(service);
    return response;
  }
);

export const mainBannerSlice = createSlice({
  name: "mainBanner",
  initialState: {
    bannerImgs: [],
    status: "idle",
    error: null,
  },

  extraReducers(builder) {
    builder.addCase(getAllBannerImg.pending, (state, action) => {
      state.status = "loading";
    });

    builder.addCase(getAllBannerImg.fulfilled, (state, action) => {
      state.status = "success";
      state.bannerImgs = action.payload;
    });

    builder.addCase(getAllBannerImg.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
    });
  },
});

export const mainBanner = (state) => state.homeBannerReducer.bannerImgs;
export const BannerStatus = (state) => state.homeBannerReducer.status;

export default mainBannerSlice.reducer;
