import { combineReducers } from "redux";

import { loginReducer } from "./loginReducer";
import { registerReducer } from "./registerReducer";
import { getJokesReducer } from "./getJokesReducer";
import { getWalletReducer } from "./getWalletReducer";
import { delJokeReducer } from "./delJokeReducer";
import { setActItemReducer } from "./setActItemReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  getJokes: getJokesReducer,
  getWallet: getWalletReducer,
  delJoke: delJokeReducer,
  activeItem: setActItemReducer,
});

export default rootReducer;
