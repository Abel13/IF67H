import { Action } from "redux";
import { AuthReducer } from "./auth/interfaces";
import { HomeReducer } from "./home/interfaces";
import { UserReducer } from "./user/interfaces";

export interface ActionProps extends Action {
  payload?: object
}

export interface ReducerProps {
  user: UserReducer,
  auth: AuthReducer,
  home: HomeReducer
}