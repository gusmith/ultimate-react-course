import { combineReducers, createStore } from "redux"; // createStore is deprecated in favour to redux toolkit, but can be useful for older application
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

export default store;
