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

export async function getOffers() {
  const res = await api.get("order/coustomer_club_list/");
  return res.data;
}
export async function getAboutUs() {
  const res = await api.get("config/about_us/");
  return res.data;
}
export async function getContactUs() {
  const res = await api.get("config/contact_us/");
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

export async function getPopularListProduct() {
  const res = await api.get("product/best_seller_list/");
  return res.data;
}

export async function partialData() {
  const res = await api.get("advertise/partial_data/");
  return res.data;
}

export async function createTicket(ticketDetail) {
  const res = await apiLogin.post("ticket/crate/", ticketDetail);
  return res.data;
}

export async function addCheque(chequeDetail) {
  const res = await apiForm.post("order/check_create/", chequeDetail);
  return res.data;
}

export async function getListShops() {
  const res = await api.get("shop/list/");
  return res.data;
}
export async function getNewListShops() {
  const res = await api.get("shop/newest/");
  return res.data;
}

export async function getListMostPopularShops() {
  const res = await api.get("shop/most_popular/");
  return res.data;
}

export async function getProductComments(id) {
  const res = await api.get(
    `api/comments/?app_name=product&model_name=product&model_id=${id}`
  );
  return res.data;
}

export async function postProductComments(id, data) {
  const res = await apiLogin.post(
    `api/comments/create/?app_name=product&model_name=product&model_id=${id}`,
    data
  );
  return res.data;
}

export async function checkRole(token) {
  const res = await apiLogin.post("account/token/", token);
  return res.data;
}

export async function myShopInfo(token) {
  const res = await apiLogin.get("shop/my_shop/", token);
  return res.data;
}

export async function getListProduct() {
  const res = await api.get("product/list/");
  return res.data;
}
export async function getListMyProduct() {
  const res = await apiLogin.get("product/my_shop/");
  return res.data;
}

export async function createCart() {
  const res = await api.post("carts/");
  return res.data;
}

export async function deleteCart(cart_pk) {
  console.log("deleteeeeeee")
  const res = await api.delete(`carts/${cart_pk}/`);
  return res.data;
}

export async function addItemToCart(item,cart_pk) {
  const res = await api.post(`carts/${cart_pk}/items/`,item);
  return res.data;
}

export async function setProfile(data) {
  const res = await apiLogin.patch("account/update_info/", data);
  return res.data;
}

export async function infoAccount() {
  const res = await apiLogin.get("account/info/");
  return res.data;
}
