import axios from "axios";
import { refreshToken } from "./api";
import Storage from "../service/Storage";
import { applyAuthTokenInterceptor } from 'axios-jwt';
export const baseUrl = "https://plastapp.iran.liara.run/";

const api = axios.create({
  baseURL: baseUrl,
  timeout: "60000",
  validateStatus:function (status) {
    return status >= 200 && status < 400; // default
  },
});

const st = Storage();

api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers["Authorization"] = `Bearer ${st.accessToken}`;
    // config.headers["Authorization"] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcyNTY4MTkyLCJpYXQiOjE2NzI1Njc4OTIsImp0aSI6IjYzZWRiZjA0ZjBkMTRlMzI4ODRhZmQzYjdjZDdlY2ZlIiwidXNlcl9pZCI6Mzd9.Nymyt0KYqVd_lChrLL7Z9EXxtq0D4DqXOkxeQ1yMdWY`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Refresh Token
applyAuthTokenInterceptor(api, refreshToken(st.refreshToken));

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
        refreshToken({"refresh":st.refreshToken}).then(res => {
          st.setAccessToken(res.access);
        })
        .catch((error) => console.log(error));
    }

    return Promise.reject(error.response);
  }
);

export default api;
