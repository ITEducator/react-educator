import thunk from "redux-thunk";
import combineReducers from "./reducers";
import { createStore, compose, applyMiddleware } from "redux";

const initialState = {};
const middleware = [thunk];

let store;

if (window.navigator.userAgent.includes("Chrome")) {
  store = createStore(
    combineReducers,
    initialState,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
} else {
  store = createStore(
    combineReducers,
    initialState,
    compose(applyMiddleware(...middleware))
  );
}

export default store;
