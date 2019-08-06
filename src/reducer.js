import { combineReducers } from "redux";
import { reducer as graphDetailReducer } from "./GraphDetail/reducer";
import { reducer as routeReducer } from "./RouteModule/reducer";

export const reducer = combineReducers({
  graphDetailReducer,
  routeReducer
});
