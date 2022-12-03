import api from "./axios";
import apiLogin from "./axiosLogin";
import apiForm from "./axiosForm";

import Storage from "../service/Storage";

export async function getAllBanners() {
  const res = await api.get("advertise/notice_banner/");
  return res.data;
}

export async function getTwoelvBanners() {
  const res = await api.get("advertise/adv_banner/");
  return res.data;
}

export async function getSliderImage() {
  const res = await api.get("config/slider/");
  return res.data;
}

// Categories
export async function getCategories() {
  const res = await api.get("category/list/");
  return res.data;
}

export async function getJobs() {
  const res = await api.get("job/list/");
  return res.data;
}

export async function getStoreRegistration() {
  const res = await api.get("config/store_registration/");
  return res.data;
}

export async function getOrderPlace() {
  const res = await api.get("config/order_place/");
  return res.data;
}

export async function getCreatePurches() {
  const res = await api.get("config/cradite_purches/");
  return res.data;
}

export async function getRulesConditon() {
  const res = await api.get("config/rule/");
  return res.data;
}

export async function getBlogList() {
  const res = await api.get("blog/list/");
  return res.data;
}

export async function getBlogDetails(id) {
  const res = await api.get(`blog/detail/${id}/`);
  return res.data;
}

export async function loginUser(authData) {
  const res = await api.post("account/login/", authData);
  return res.data;
}
export async function applyJob(authData) {
  const res = await api.post("job/apply/", authData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
}
export async function refreshToken(token) {
  const res = await api.post("api/token/refresh/", token);
  return res.data;
}

export async function getCities() {
  const res = await api.post("api/token/refresh/");
  return res.data;
}

export async function createProduct(dataProduct) {
  const res = await apiForm.post("product/create/", dataProduct);
  return res.data;
}

export async function createShop(dataShop) {
  const res = await apiForm.post("shop/create/", dataShop);
  return res.data;
}

export async function getAmazingListProduct() {
  const res = await api.get("product/amazing_list/");
  return res.data;
}

export async function partialData() {
  const res = await api.get("advertise/partial_data/");
  return res.data;
}

export async function listShops() {
  const res = await api.get("shop/list/");
  return res.data;
}

export async function checkStatus() {
  const res = await api.get("account/token/");
  return res.data;
}