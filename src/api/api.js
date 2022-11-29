import api from "./axios";
import apiLogin from "./axiosLogin";

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
  const res = await api.get("config/cradite_purches/");
  return res.data;
}

export async function loginUser(authData) {
  const res = await api.post("account/login/", authData);
  return res.data;
}
export async function applyJob(authData) {
  const res = await api.post("job/apply", authData);
  return res.data;
}
