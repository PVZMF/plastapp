import { createSlice } from "@reduxjs/toolkit";


export const myShopSlice = createSlice({
  name: "MyShop",
  initialState: [{
    city: "",
    economic_code:"",
    first_name: "",
    id:0,
    is_active:false,
    last_name:"",
    license_image:"",
    logo:"",
    most_popular:false,
    name:"",
    national_card_image:"",
    newest_shop:false,
    registration_number:"",
    sheba_no:"",
    state:"",
    suggestion:false,
    user:0}],

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