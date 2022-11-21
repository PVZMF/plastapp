import { getItem, setItem } from "lcoalStorage";
import { USER, LOG_OUT, SET_USER_OK } from "./actions/actionTypes";

let userInfo;
if (getItem("user") && getItem("access")) {
  userInfo = JSON.parse(getItem("user"));
} else userInfo = null;

const user = (state = userInfo, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER:
      return payload;
    case SET_USER_OK:
      return { ...payload, is_ok: true };
    case LOG_OUT:
      setItem("user", null);
      return null;
    default:
      return state;
  }
};

export default user;
