import { FETCH_ADBANNERS } from "./actions/actionTypes";

const adBanners = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_ADBANNERS:
      return payload;
    default:
      return state;
  }
};

export default adBanners;
