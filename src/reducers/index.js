import { combineReducers } from "redux";

import { loginReducer } from "./loginReducer";
import { registerReducer } from "./registerReducer";
import { getJokesReducer } from "./getJokesReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  getJokes: getJokesReducer,
});

export default rootReducer;
