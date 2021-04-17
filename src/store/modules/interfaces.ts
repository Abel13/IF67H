import { Action } from "redux";

export interface ActionProps extends Action {
  payload?: object;
}