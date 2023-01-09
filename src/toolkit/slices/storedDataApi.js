import { createSlice } from "@reduxjs/toolkit";

export const storedDataSlice = createSlice({
  name: "dataStored",
  initialState: {
    categorys: [],
  },
  reducers: {
    setCategorisRedux : (state, action) => {
       return {...state,categorys:action.payload}
    },
 
  },
});

export const { setCategorisRedux} = storedDataSlice.actions;


export default storedDataSlice.reducer;
