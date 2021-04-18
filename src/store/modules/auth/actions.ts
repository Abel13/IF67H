export const SIGN_IN = "@auth/SIGN_IN";
export const SIGN_IN_SUCCESS = "@auth/SIGN_IN_SUCCESS";
export const OPEN_SIGN_UP = "@user/OPEN_SIGN_UP";

export function signInRequest({ email, password }: SignInFormValues) {
  return {
    type: SIGN_IN,
    payload: { email, password },
  };
}

export function openSignUp() {
  return {
    type: OPEN_SIGN_UP,
  };
}

export function signInSuccess() {
  // "ACTION SUCCESS")
  return {
    type: SIGN_IN_SUCCESS,
  };
}