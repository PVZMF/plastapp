import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import callApi from "../../../api/apiClient";

export const getAllSliderImgs = createAsyncThunk(
  "mainSlider/imgs",
  async (service) => {
    const response = await callApi(service);
    return response;
  }
);

export const mainSliderSlice = createSlice({
  name: "mainSlider",
  initialState: {
    sliderImgs: [],
    status: "idle",
    error: null,
  },

  reducers: {
    clearSliderImgsState(state) {
      state.sliderImgs = [];
    },
  },

  extraReducers(builder) {
    builder.addCase(getAllSliderImgs.pending, (state, action) => {
      state.status = "loading";
    });

    builder.addCase(getAllSliderImgs.fulfilled, (state, action) => {
      state.status = "success";
      state.sliderImgs = action.payload;
    });

    builder.addCase(getAllSliderImgs.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
    });
  },
});

export const mainSliderImgs = (state) => state.homeSliderReducer.sliderImgs;
export const SliderStatus = (state) => state.homeSliderReducer.status;

export const { clearSliderImgsState } = mainSliderSlice.actions;
export default mainSliderSlice.reducer;
