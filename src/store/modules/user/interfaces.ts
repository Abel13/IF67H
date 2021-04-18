import { User } from "../../../models/user";

export interface UserReducer {
  loading: boolean
  openSignUp?: boolean
  user?: User
}