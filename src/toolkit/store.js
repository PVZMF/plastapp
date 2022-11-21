import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import isLoading from "./isLoading";
import user from "./user";
import products from "./products";
import adBanners from "./adBanners";
import mainPage from "./mainPage";
import myProducts from "./myProducts";
import product from "./product";
import hasShop from "./hasShop";


const persistConfig = {
  key: "myApp",
  storage,
};

const rootReducer = combineReducers(
  {
    isLoading,
    products,
    adBanners,
    mainPage,
    user,
    myProducts,
    product,
    hasShop,
  }
);

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export const persistor = persistStore(store);

export default store;



