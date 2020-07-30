import thunk from "redux-thunk";
import combineReducers from "./reducers";
import { createStore, compose, applyMiddleware } from "redux";

const initialState = {};
const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
