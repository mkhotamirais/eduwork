import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import counterReducer from "./counter/Reducer";
import thunk from "redux-thunk";

let rootReducers = combineReducers({
  counter: counterReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducers, composeEnhancer(applyMiddleware(thunk)));
export default store;
