import { createStore } from "redux";
import reducer from "./reducer";
import sliderReducer from "./sliderReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  tradingFee: reducer,
  value: sliderReducer,
});
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
