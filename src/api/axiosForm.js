import axios from "axios";
import { refreshToken } from "./api";
import Storage from "../service/Storage";

export const baseUrl = "https://plastapp.iran.liara.run/";

const api = axios.create({
  baseURL: baseUrl,
  timeout: "5000",
});

api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const st = Storage();
    config.headers["Authorization"] = `Bearer ${st.accessToken}`;
    config.headers["Content-Type"] = "multipart/form-data";
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    if (error.response.status == 401) {
      const st = Storage();
      console.log({ refresh: st.refreshToken });
      refreshToken({ refresh: st.refreshToken })
        .then((res) => {
          st.setAccessToken(res.access);
        })
        .catch((error) => console.log(error));
    }
    if (error.response.status === 400) {
      // try to get new access token with refresh token
      // try the request again
      // logout user and redirect to login page if error
      // return error.response.data;
      return error.response;
    }
    return Promise.reject(error.response);
  }
);

export default api;
