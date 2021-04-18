export const SIGN_UP = "@user/SIGN_UP";
export const SIGN_UP_SUCCESS = "@user/SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "@user/SIGN_UP_FAILURE";
export const BACK_TO_LOGIN = "@user/BACK_TO_LOGIN";

export function signUpRequest({ name, email, password }: SignUpFormValues) {  // "ACTION RUNNING")
  return {
    type: SIGN_UP,
    payload: { name, email, password },
  };
}

export function backToLogin() {
  return {
    type: BACK_TO_LOGIN
  };
}

export function signUpSuccess() {
  // "ACTION SUCCESS ===================")
  return {
    type: SIGN_UP_SUCCESS
  };
}

export function signUpFailure() {
  return {
    type: SIGN_UP_FAILURE
  };
}