import { createSlice } from "@reduxjs/toolkit";

export const steperSlice = createSlice({
  name: "step",
  initialState: {
    steper: 0,
  },
  reducers: {
    stepPlus: (state, action) => {
      return {
        steper: state.steper + 1,

      }
    },
    stepMinus: (state, action) => {
      return {
        steper: state.steper - 1

      }
    },
  },
});

export const {
  stepPlus,
  stepMinus
} = steperSlice.actions;

export default steperSlice.reducer;
