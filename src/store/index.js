import {
  applyMiddleware,
  legacy_createStore as createStore,
  compose,
} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

export default function configureStore() {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
}
