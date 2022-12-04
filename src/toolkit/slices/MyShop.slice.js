import { createSlice } from "@reduxjs/toolkit";


export const myShopSlice = createSlice({
  name: "MyShop",
  initialState: [{
    city: "",
    economic_code:"",
    first_name: "",
    id:new Number,
    is_active:new Boolean,
    last_name:"",
    license_image:"",
    logo:"",
    most_popular:false,
    name:"",
    national_card_image:"",
    newest_shop:new Boolean,
    registration_number:"",
    sheba_no:"",
    state:"",
    suggestion:new Boolean,
    user:new Number}],

reducers: {
  setMyShop: (state, action) => {
    state = action.payload;
  },
  setTotal: (state, action) => {
    state.total = action.payload;
  }
}
});

export const { setMyShop, setTotal} = myShopSlice.actions;
export default myShopSlice.reducer;