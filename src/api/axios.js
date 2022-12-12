import axios from "axios";
import Storage from "../service/Storage";
import { refreshToken } from "./api";

export const baseUrl = "https://plastapp.iran.liara.run/";

const api = axios.create({
  baseURL: baseUrl,
  timeout: 60000,
});

// api.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(st.accessToken())}`;
// axios.defaults.headers.post['Authorization'] = `Bearer ${st.accessToken()}`;


api.interceptors.request.use(
  function (res) {
    // Do something before request is sent
    return res;
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
  // function (error) {
  //   if (error.response.status == 401) {
  //     const st = Storage();
  //     console.log({ refresh: st.refreshToken });
  //     refreshToken({ refresh: st.refreshToken })
  //       .then((res) => {
  //         st.setAccessToken(res.access);
  //       })
  //       .catch((error) => console.log(error));
  //   }

  //   return Promise.reject(error);
  // }
);

export default api;
