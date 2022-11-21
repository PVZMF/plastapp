import { FETCH_MY_PRODUCTS } from "./actions/actionTypes";

const INITIAL_STATE = null;

const myProducts = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_MY_PRODUCTS:
      return payload;
    default:
      return state;
  }
};

export default myProducts;
