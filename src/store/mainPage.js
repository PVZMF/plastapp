import { FETCH_MAINPAGE } from "./actions/actionTypes";

const INITIAL_STATE = null;

const mainPage = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_MAINPAGE:
      return payload;
    default:
      return state;
  }
};

export default mainPage;
