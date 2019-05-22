import { combineReducers } from "redux";

import { loginReducer } from "./loginReducer";
import { registerReducer } from "./registerReducer";
import { getJokesReducer } from "./getJokesReducer";
import { getWalletReducer } from "./getWalletReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  getJokes: getJokesReducer,
  getWallet: getWalletReducer
});

export default rootReducer;
