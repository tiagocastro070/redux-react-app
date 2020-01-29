import { createStore } from "redux";
import { Reducers } from "./reducers/reducers.js";

export const Store = createStore(Reducers);
