import { SET_HAS_SHOP } from './actions/actionTypes';

const product = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_HAS_SHOP:
      return payload;
    default:
      return state;
  }
};

export default product;
