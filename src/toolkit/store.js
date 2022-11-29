import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import cartSlice from "./slices/cart.slice";
import cartReducer from "./cart/cartReducer";
import authSlice from "./slices/auth";
import ticketSlice from "./slices/ticketSlice";



const persistConfig = {
  key: "PlastApp",
  storage,
};
const rootReducer = combineReducers({
  // myreducerName: reducer;
  cartReducer: cartSlice,
  cartState: cartReducer,
  auth: authSlice,
  ticket: ticketSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export const persistor = persistStore(store);

export default store;
