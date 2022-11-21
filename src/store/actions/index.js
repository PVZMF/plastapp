import axios from "axios";
import { base_api_url } from "../../api/apiClient";
import { deleteItem, getItem } from "../../lcoalStorage";
import {
  DELETE_PRODUCT_LIST,
  FETCH_ADBANNERS,
  FETCH_FAVORITE_PRODUCTS,
  FETCH_MAINPAGE,
  FETCH_MY_PRODUCTS,
  FETCH_PRODUCT,
  IS_LOADING,
  LOG_OUT,
  SET_PRODUCTS,
  SET_USER_OK,
  USER,
  SET_HAS_SHOP,
} from "./actionTypes";
import { handleError } from "../../functions/handleEorro";

const accessToken = getItem("access");

export const setIsLoading = (payload) => ({
  type: IS_LOADING,
  payload,
});

export const setUser = (payload) => ({
  type: USER,
  payload,
});

export const setUserOk = () => ({
  type: SET_USER_OK,
});

export const logOut = () => {
  deleteItem("access");
  deleteItem("refresh");

  return {
    type: LOG_OUT,
  };
};

export const deleteProductList = () => {
  return {
    type: DELETE_PRODUCT_LIST,
  };
};

export const fetchProducts = (queries) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `${base_api_url}/search/product/category/${queries}`
    );

    dispatch({
      type: SET_PRODUCTS,
      payload: data,
    });
  } catch (err) {
    handleError(err);
  }
};

export const fetchAdBanners = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${base_api_url}/banners/`);

    dispatch({
      type: FETCH_ADBANNERS,
      payload: data,
    });
  } catch (err) {
    handleError(err);
  }
};

export const fetchMainPage = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${base_api_url}/LoadPoster/`);

    dispatch({
      type: FETCH_MAINPAGE,
      payload: data,
    });
  } catch (err) {
    handleError(err);
  }
};

export const fetchMyProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${base_api_url}/Product/?me=1`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    dispatch({
      type: FETCH_MY_PRODUCTS,
      payload: data,
    });
  } catch (err) {
    handleError(err);
  }
};

export const fetchProduct = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${base_api_url}/Product/${id}/`);

    dispatch({
      type: FETCH_PRODUCT,
      payload: data,
      id,
    });
  } catch (err) {
    handleError(err);
  }
};

export const hasShopChecker = () => async (dispatch) => {
  const Token = getItem("access");

  try {
    const result = await axios
      .get(`${base_api_url}/Profile/`, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((res) => {
        const { user_type } = res.data;
        return user_type === "B" ? true : user_type === "C" ? false : null;
      });

    dispatch({
      type: SET_HAS_SHOP,
      payload: result,
    });
  } catch (err) {
    handleError(err);
  }
};
