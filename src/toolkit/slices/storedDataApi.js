import { createSlice } from "@reduxjs/toolkit";

export const storedDataSlice = createSlice({
  name: "dataStored",
  initialState: {
    categorys: [],
    partialData: [],
  },
  reducers: {
    setCategorisRedux: (state, action) => {
      return { ...state, categorys: action.payload };
    },
    setPartialDataRedux: (state, action) => {
      return { ...state, partialData: action.payload };
    },
  },
});

export const { setCategorisRedux, setPartialDataRedux } =
  storedDataSlice.actions;

export default storedDataSlice.reducer;
